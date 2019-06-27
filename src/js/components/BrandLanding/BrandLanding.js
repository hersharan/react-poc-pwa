/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import "react-alice-carousel/lib/alice-carousel.css";

/* Import Custom Libraries */
import BannerLoader from '../Loaders/BannerLoader';
import HeadingLoader from '../Loaders/HeadingLoader';
import brandLandingActions from './brandLanding.action';
import productsAction from '../Products/ProductsListing/productsListing.actions';
import LevelTemplate from '../Templates/LevelTemplate';
import Template from '../Templates/Template';
import { BRANDS_PRODUCTS_LABEL, SEE_MORE } from '../../helpers/translations';
import { LIMIT } from '../../helpers/appConstants';
import '../../../sass/components/brand-landing.scss';
import HomeSectionLoader from '../Loaders/HomeSectionLoader';
import {GlobalBrandsConsumer, GlobalBrands} from '../GlobalBrands';
import { inlineLoading } from '../../helpers/utils';

class BrandLanding extends Component {
  static contextType = GlobalBrands;

  constructor() {
    super();
    this.state = {
      items: [],
      data: [],
      fetched: true //Remove if use higher Order Functions
    }

    this.renderLevels = this.renderLevels.bind(this);
    this.getNextPageContent = this.getNextPageContent.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getLevelsList(id, LIMIT, 0);
    this.props.getProducts(4, 0, id);
  }

  componentWillReceiveProps(nextProps) {
    const {fetchingLevelsList, fetchedLevelsList, brandlevels, pager } = nextProps;

    if (fetchedLevelsList && pager && this.state.fetched) {
      if (pager.count > LIMIT) {
        this.setState({show: true})
      }
      else {
        this.setState({show: false})
      }
      // Merging Results on showMore.
      this.setState({
        data: [...this.state.data, ...brandlevels.results],
        is_disabled: false,
        fetched: false,
        useractivity: true
      });
    }
    else if (fetchingLevelsList) {
      this.setState({fetched: true})
    }
  }

  // Fetching Data on Show more Click
  getNextPageContent() {
    const {id} = this.props.match.params;
    let offset = this.state.data.length;
    this.setState({is_disabled: true});

    this.props.getLevelsList(id, LIMIT, offset);
  }

  // Explore Learning Section
  renderLevels() {
    const { fetchingLevelsList } = this.props;
    const results = this.state.data;
    if (results && results.length !== 0) {
      return (
        <section className="level-listing brand-landing listing text-center row">
          <LevelTemplate
            items={results}
            type="courses"
            showSubTitle={true}
            showBrandTitle={false}
          />
          <div className={classnames("more-link", { "d-none": !this.state.show })}>
            <button className={classnames("btn btn-outline-secondary text-uppercase", { "disabled": this.state.is_disabled })} onClick={this.getNextPageContent}>{this.props.seeMoreLabel}</button>
          </div>
        </section>
      )
    }
    else if (fetchingLevelsList) {
      return (
        <section className="level-listing listing text-center">
          <BannerLoader height={1920} width={1080} />
          <HeadingLoader />
          <BannerLoader height={1920} width={1080} />
          <HeadingLoader />
        </section>
      )
    }
  }

  renderProducts() {
    const { fetchingProductsList, fetchedProductsList, productsList } = this.props;
    const {id} = this.props.match.params;

    if (fetchedProductsList && productsList.length !==0) {
      return (
        <section className="product-listing listing text-center">
          <Row>
            <div className="col content-header">
              <h1 className="page-title">{this.props.productsHeading}</h1>
            </div>
          </Row>
          <Template items={productsList.results} type="products" md={6} />
          <Row className="show-more">
            <Col className={"more-link"}>
              <a href={`/products?brand=${id}`} className="btn">{this.props.seeMoreLabel}</a>
            </Col>
          </Row>
       </section>
      )
    }
    else if (fetchingProductsList) {
      return (
        <>
          <HeadingLoader />
          <HomeSectionLoader  type="news" sectionClass="trending-listing listing text-center" itemClass="list-item"/>
          <HeadingLoader />
        </>
      )
    }
  }

  render() {
    const {id} = this.props.match.params;
    const name = this.context[0] === 'load' ? inlineLoading() : this.context[id];
    return (
      <GlobalBrandsConsumer>
        {() => {
          return (
            <div className="brand-wrapper">
              {name &&
                <h2 className="page-title section-title">
                  {name}
                </h2>
              }
              {this.renderLevels()}
              {this.renderProducts()}
            </div>
          )
        }}
      </GlobalBrandsConsumer>
    )
  }
}

BrandLanding.propTypes = {
  seeMoreLabel: PropTypes.string,
  productsHeading: PropTypes.string
}

BrandLanding.defaultProps = {
  seeMoreLabel: SEE_MORE,
  productsHeading: BRANDS_PRODUCTS_LABEL
};

function mapStateToProps(state) {
  const { fetchingLevelsList, fetchedLevelsList, brandlevels, brandlevelsError, pager, status } = state.brandLanding;

  const { fetchingProductsList, fetchedProductsList, productsList, productListError } = state.productsListing;

  return { fetchingLevelsList, fetchedLevelsList, brandlevels, brandlevelsError, pager, status, fetchingProductsList, fetchedProductsList, productsList, productListError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLevelsList: (id, limit, offset) => dispatch(brandLandingActions.getLevelsList(id, limit, offset)),
    getProducts: (id, limit, offset) => dispatch(productsAction.getProductsListing(id, limit, offset)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(BrandLanding);

export default connectedComponent;