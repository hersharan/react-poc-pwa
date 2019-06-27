import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  Row,
 } from 'reactstrap';

import getIngredientsListingActions from './ingredientsListing.actions';
import getFeauredCarouselActions from '../../Carousel/featuredCarousel.action';
import Template from '../../Templates/Template';
import { NoContentFound } from '../../../helpers/error';
import { LIMIT } from '../../../helpers/appConstants';
import { INGREDIENT_LISTING_TITLE, SEE_MORE } from '../../../helpers/translations';
import ListingLoader from '../../Loaders/ListingLoader';
import BannerLoader from '../../Loaders/BannerLoader';
import LazyImages from '../../Common/LazyImages';
import {BANNER_DEFAULT} from '../../../helpers/appConstants';
import '../../../../sass/components/ingredients.scss';

class IngredientsListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false,
      fetched: false,
    }

    this.getListData = this.getListData.bind(this);
    this.getNextPageContent = this.getNextPageContent.bind(this);
  }

  componentDidMount() {
    this.props.getIngredientsListing(LIMIT, 0);
    this.props.getSpotlight('ingredient');
  }

  getSpotlight() {
    const {fetchingFeaturedCarousel, fetchedFeaturedCarousel, featuredCarousel} = this.props;

    if (fetchedFeaturedCarousel && featuredCarousel && featuredCarousel.results.length !==0) {
      const {imageLarge, imageMedium, imageSmall}  = featuredCarousel.results[0];

      return <LazyImages
        defaultImage={BANNER_DEFAULT}
        src={imageSmall ? imageSmall : BANNER_DEFAULT}
        imageLarge={imageLarge ? imageLarge : BANNER_DEFAULT}
        imageMedium={imageMedium ? imageMedium : BANNER_DEFAULT}
        type={'banner'}
      />
    }
    else if (fetchingFeaturedCarousel) {
      return <BannerLoader height={1920} width={1080} />
    }
  }

  componentWillReceiveProps(nextProps) {
    const {fetchingIngredientsList, fetchedIngredientsList, ingredients, pager} = nextProps;
    if (fetchedIngredientsList && pager && this.state.fetched) {
      if (pager.count > LIMIT) {
        this.setState({show: true})
      }
      else {
        this.setState({show: false})
      }

      // Merging Results on showMore.
      this.setState({
        data: [...this.state.data, ...ingredients.results],
        is_disabled: false,
        fetched: false
      });
    }
    else if (fetchingIngredientsList) {
      this.setState({fetched: true})
    }
  }

  getListData() {
    const { fetchingIngredientsList, fetchedIngredientsList, status } = this.props;

    let finalData = this.state.data;

    if (finalData && finalData.length !== 0) {
      return <Template items={finalData} type="ingredients" />
    }
    else if (fetchedIngredientsList) {
      if ((finalData.length === 0 && status === 204)) {
        return NoContentFound();
      }
    }
    else if (fetchingIngredientsList) {
      return <ListingLoader />
    }
  }

  getNextPageContent() {
    let offset = this.state.data.length;
    this.setState({is_disabled: true});

    this.props.getIngredientsListing(LIMIT, offset);
  }

  // Full Page Content
  render() {
    return (
      <div className="ingredients-listing">
        <div className="banner-spotlight">
          {this.getSpotlight()}
        </div>
        <Row>
          <div className="col content-header">
            <h1 className="page-title">{this.props.sectionHeading}</h1>
          </div>
        </Row>
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

IngredientsListing.propTypes = {
  sectionHeading: PropTypes.string,
  seeMoreLabel: PropTypes.string,
}

IngredientsListing.defaultProps = {
  sectionHeading: INGREDIENT_LISTING_TITLE,
  seeMoreLabel: SEE_MORE,
};

function mapStateToProps(state) {
  const { fetchingIngredientsList, fetchedIngredientsList, ingredients, ingredientsListError, pager, status } = state.ingredientsListing;

  const { fetchingFeaturedCarousel, fetchedFeaturedCarousel, featuredCarousel, featuredCarouselError } = state.featuredCarousel;

  return { fetchingIngredientsList, fetchedIngredientsList, ingredients, ingredientsListError, pager, status, fetchingFeaturedCarousel, fetchedFeaturedCarousel, featuredCarousel, featuredCarouselError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIngredientsListing: (limit, offset) => dispatch(getIngredientsListingActions.getIngredientsListing(limit, offset)),
    getSpotlight: (type) => dispatch(getFeauredCarouselActions.getFeauredCarousel(type)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(IngredientsListing);

export default connectedComponent;