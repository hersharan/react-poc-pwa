/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Import Custom Libraries */
import getIngredientsListingActions from './ingredientsDetails.actions';
import LazyImages from '../../Common/LazyImages';
import BannerLoader from '../../Loaders/BannerLoader';
import DetailsLoader from '../../Loaders/DetailsLoader';
import { BANNER_DEFAULT } from '../../../helpers/appConstants';
import Keynotes from '../../KeyNotes/KeyNotes';
import {
  INGREDIENT_LIBRARY,
  INGREDIENT_STORY_LABEL,
  INGREDIENT_FEATURED_LABEL } from '../../../helpers/translations';
import '../../../../sass/components/ingredients.scss';

class IngredientDetails extends Component {
  constructor(props) {
    super(props);

    this.getIngredientDetailsTemplate = this.getIngredientDetailsTemplate.bind(this);
  }

  componentDidMount() {
    const { nid } = this.props.match.params;

    this.props.getIngredientDetails(nid);
  }

  getIngredientDetailsTemplate() {
    const { fetchingIngredientDetail, fetchedIngredientDetail, ingredientDetail } = this.props;

    if (fetchedIngredientDetail) {
      if (ingredientDetail && ingredientDetail.length !== 0) {
        const data = ingredientDetail[0];
        return (
          <>
            <Row>
              {data.imageLarge &&
                <LazyImages
                  defaultImage={BANNER_DEFAULT}
                  src={data.imageSmall ? data.imageSmall : BANNER_DEFAULT}
                  imageLarge={data.imageLarge ? data.imageLarge : BANNER_DEFAULT}
                  imageMedium={data.imageMedium ? data.imageMedium : BANNER_DEFAULT}
                  type={'banner'}
                  />
              }
            </Row>
            <Row>
              <article className="ingredient text-center">
                <div className="information">
                  <p className="sub-heading brand-title">
                    <Link to={`/ingredients`}>
                      {this.props.pageTitle}
                    </Link>
                  </p>
                  {data.displayTitle &&
                    <h2 className="page-title">
                      {data.displayTitle}
                    </h2>
                  }
                </div>
                {data.subTitle &&
                  <div className="summary info">
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.subTitle }} />
                  </div>
                }
                {data.story &&
                  <div className="story info">
                    <h2 className="section-title">{this.props.storyLabel}</h2>
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.story }} />
                  </div>
                }
                {data.products.length !==0 &&
                  <Keynotes type='product' items={data.products} header={this.props.featuredLabel} />
                }
              </article>
            </Row>
          </>
        )
      }
    }
    else if (fetchingIngredientDetail) {
      return (
        <>
          <BannerLoader height={1920} width={1080} />
          <DetailsLoader />
        </>
      )
    }
  }

  render() {
    return (
      <div className="ingredient-details">
        {this.getIngredientDetailsTemplate()}
      </div>
    )
  }
}

IngredientDetails.propTypes = {
  pageTitle: PropTypes.string,
  storyLabel: PropTypes.string,
  featuredLabel: PropTypes.string
}

IngredientDetails.defaultProps = {
  pageTitle: INGREDIENT_LIBRARY,
  storyLabel: INGREDIENT_STORY_LABEL,
  featuredLabel: INGREDIENT_FEATURED_LABEL
};

function mapStateToProps(state) {
  const { fetchingIngredientDetail, fetchedIngredientDetail, ingredientDetail, ingredientDetailsError } = state.ingredientDetails;

  return { fetchingIngredientDetail, fetchedIngredientDetail, ingredientDetail, ingredientDetailsError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getIngredientDetails: (nid) => dispatch(getIngredientsListingActions.getIngredientDetails(nid)),
  }
}

const connectedIngredientDetails = connect(mapStateToProps, mapDispatchToProps)(IngredientDetails);

export default connectedIngredientDetails;
