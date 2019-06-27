import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {
  Row,
 } from 'reactstrap';

import getProductsListingActions from './productsListing.actions';
import getFeauredCarouselActions from '../../Carousel/featuredCarousel.action';
import Template from '../../Templates/Template';
import { NoContentFound } from '../../../helpers/error';
import { LIMIT } from '../../../helpers/appConstants';
import LazyImages from '../../Common/LazyImages';
import { PRODUCT_LISTING_TITLE, PRODUCT_LISTING_MORE_BTN } from '../../../helpers/translations';
import ListingLoader from '../../Loaders/ListingLoader';
import BrandList from '../../BrandList/BrandList';
import BannerLoader from '../../Loaders/BannerLoader';
import {BANNER_DEFAULT} from '../../../helpers/appConstants';
import '../../../../sass/components/products.scss';

class ProductsListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false,
      fetched: false,
      brandId: 0
    }

    this.getListData = this.getListData.bind(this);
    this.getNextPageContent = this.getNextPageContent.bind(this);
    this.getBrandId = this.getBrandId.bind(this);
    this.getSpotlight = this.getSpotlight.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const { brand } = parsed;
    const brandId = brand ? brand : this.state.brandId;
    if (brand && brand.length !==0 ) {
      this.setState({brandId: brand})
    }

    this.props.getProductsListing(LIMIT, 0, brandId)
    this.props.getSpotlight('product');
  }

  getSpotlight() {
    const {fetchingFeaturedCarousel, fetchedFeaturedCarousel, featuredCarousel} = this.props;
    if (fetchedFeaturedCarousel && featuredCarousel && featuredCarousel.results.length !==0) {
      const {imageLarge, imageMedium, imageSmall}  = featuredCarousel.results[0];

      return (
      <LazyImages
        defaultImage={BANNER_DEFAULT}
        src={imageSmall ? imageSmall : BANNER_DEFAULT}
        imageLarge={imageLarge ? imageLarge : BANNER_DEFAULT}
        imageMedium={imageMedium ? imageMedium : BANNER_DEFAULT}
        type={'banner'}
        />
      )
    }
    else if (fetchingFeaturedCarousel) {
      return <BannerLoader height={1920} width={1080} />
    }
  }

  componentWillReceiveProps(nextProps) {
    const {fetchingProductsList, fetchedProductsList, productsList, pager} = nextProps;
    if (fetchedProductsList && pager && this.state.fetched) {
      if (pager.count > LIMIT) {
        this.setState({show: true})
      }
      else {
        this.setState({show: false})
      }

      // Merging Results on showMore.
      this.setState({
        data: [...this.state.data, ...productsList.results],
        is_disabled: false,
        fetched: false
      });
    }
    else if (fetchingProductsList) {
      this.setState({fetched: true})
    }
  }

  getBrandId(id) {
    this.setState({brandId: id, data: []});
    this.props.getProductsListing(LIMIT, 0, id);
  }

  getListData() {
    const { fetchingProductsList, fetchedProductsList, status } = this.props;

    let finalData = this.state.data;

    if (finalData && finalData.length !== 0) {
      return <Template items={finalData} type="products" />
    }
    else if (fetchedProductsList) {
      if ((finalData.length === 0 && status === 204)) {
        return NoContentFound();
      }
    }
    else if (fetchingProductsList) {
      return <ListingLoader />
    }
  }

  getNextPageContent() {
    let offset = this.state.data.length;
    this.setState({is_disabled: true});

    this.props.getProductsListing(LIMIT, offset, this.state.brandId);
  }

  // Full Page Content
  render() {
    return (
      <div className="products-listing">
        <div className="banner-spotlight">
          {this.getSpotlight()}
        </div>
        <Row>
          <div className="col content-header">
            <h1 className="page-title">{this.props.sectionHeading}</h1>
          </div>
        </Row>
        <div className="brands">
          <BrandList
            getBrandId={(id) => this.getBrandId(id)}
            defaultBrand={this.state.brandId}
          />
        </div>
        {this.getListData()}
        <Row>
          <div className={classnames("col more-link", { "d-none": !this.state.show })}>
            <button className={classnames("btn btn-outline-secondary text-uppercase", { "disabled": this.state.is_disabled })} onClick={this.getNextPageContent}>{this.props.seeMoreLabel}</button>
          </div>
        </Row>
      </div>
    )
  }
}

ProductsListing.propTypes = {
  sectionHeading: PropTypes.string,
  seeMoreLabel: PropTypes.string,
}

ProductsListing.defaultProps = {
  sectionHeading: PRODUCT_LISTING_TITLE,
  seeMoreLabel: PRODUCT_LISTING_MORE_BTN,
};

function mapStateToProps(state) {
  const { fetchingProductsList, fetchedProductsList, productsList, productListError, pager, status } = state.productsListing;

  const { fetchingFeaturedCarousel, fetchedFeaturedCarousel, featuredCarousel, featuredCarouselError } = state.featuredCarousel;

  return { fetchingProductsList, fetchedProductsList, productsList, productListError, pager, status, fetchingFeaturedCarousel, fetchedFeaturedCarousel, featuredCarousel, featuredCarouselError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductsListing: (limit, offset, brandId) => dispatch(getProductsListingActions.getProductsListing(limit, offset, brandId)),
    getSpotlight: (type) => dispatch(getFeauredCarouselActions.getFeauredCarousel(type)),
  }
}

const connectedProductsListing = connect(mapStateToProps, mapDispatchToProps)(ProductsListing);

export default connectedProductsListing;