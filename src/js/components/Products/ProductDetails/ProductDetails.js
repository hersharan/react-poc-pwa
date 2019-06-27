/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Import Custom Libraries */
import getProductDetailActions from './productDetails.actions';
import LazyImages from '../../Common/LazyImages';
import BannerLoader from '../../Loaders/BannerLoader';
import DetailsLoader from '../../Loaders/DetailsLoader';
import { BANNER_DEFAULT } from '../../../helpers/appConstants';
import Keynotes from '../../KeyNotes/KeyNotes';
import {GlobalBrandsConsumer, GlobalBrands} from '../../GlobalBrands';
import {
  PRODUCT_LIBRARY,
  STORY_LABEL,
  SCENT_LABEL,
  SPECTRUM_LABEL,
  SELLING_LABEL,
  KEYNOTES_LABEL,
  VIDEO_LABEL } from '../../../helpers/translations';
import '../../../../sass/components/products.scss';

class ProductDetail extends Component {
  static contextType = GlobalBrands;
  constructor(props) {
    super(props)
    this.state = {
      nid: 0
    }

    this.getProductDetailsTemplate = this.getProductDetailsTemplate.bind(this);
  }

  componentDidMount() {
    const { nid } = this.props.match.params;

    this.props.getProductDetail(nid);
  }

  getProductDetailsTemplate() {
    const { fetchingProductDetail, fetchedProductDetail, productDetail } = this.props;

    if (fetchedProductDetail) {
      if (productDetail.results && productDetail.results.length !== 0) {
        const data = productDetail.results[0];
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
              <article className="product text-center">
                <p className="sub-heading brand-title">
                  <Link to={`/products`}>
                    {this.props.pageTitle}
                  </Link>
                </p>
                <div className="header-info">
                  {data.brand !==0 &&
                    <h2 className="page-title">
                      {this.context[data.brand]}
                    </h2>
                  }
                  {data.displayTitle &&
                    <h2 className="page-title">
                      {data.displayTitle}
                    </h2>
                  }
                </div>
                {data.packagingInfo &&
                  <div className="packing-info info">
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.packagingInfo }} />
                  </div>
                }
                {data.story &&
                  <div className="story info">
                    <h2 className="section-title">{this.props.storyLabel}</h2>
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.story }} />
                  </div>
                }
                {data.scent &&
                  <div className="scent info">
                    <h2 className="section-title">{this.props.scentLabel}</h2>
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.scent }} />
                  </div>
                }
                {data.keyNotes.length !==0 &&
                  <Keynotes type='ingredient' items={data.keyNotes} header={this.props.keyNotesLabel} showSubTitle={true} />
                }
                {data.spectrumLarge &&
                  <div className="spectrum info">
                    <h2 className="section-title">{this.props.spectrumLabel}</h2>
                    <div className="details">
                      <LazyImages
                        defaultImage={BANNER_DEFAULT}
                        src={data.spectrumSmall ? data.spectrumSmall : BANNER_DEFAULT}
                        imageLarge={data.spectrumLarge ? data.spectrumLarge : BANNER_DEFAULT}
                        imageMedium={data.spectrumMedium ? data.spectrumMedium : BANNER_DEFAULT}
                        type={'banner'}
                        />
                    </div>
                  </div>
                }
                {data.selling &&
                  <div className="scent info">
                    <h2 className="section-title">{this.props.sellingLabel}</h2>
                    <div className="description" dangerouslySetInnerHTML={{ __html: data.selling }} />
                  </div>
                }
                {data.video &&
                  <div className="video info">
                    <h2 className="section-title">{this.props.videoLabel}</h2>
                    <div className="details">
                      <video width="640" height="360" controls poster={data.videoThumbnailImage ? data.videoThumbnailImage : BANNER_DEFAULT} controlsList="nodownload">
                        <source src={data.video} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                }
              </article>
            </Row>
          </>
        )
      }
    }
    else if (fetchingProductDetail) {
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
      <GlobalBrandsConsumer>
        {() => {
          return (
            <div className="product-details">
              {this.getProductDetailsTemplate()}
            </div>
          )
        }}
      </GlobalBrandsConsumer>
    )
  }
}

ProductDetail.propTypes = {
  pageTitle: PropTypes.string,
  storyLabel: PropTypes.string,
  scentLabel: PropTypes.string,
  spectrumLabel: PropTypes.string,
  sellingLabel: PropTypes.string,
  videoLabel: PropTypes.string,
  keyNotesLabel: PropTypes.string,
}

ProductDetail.defaultProps = {
  pageTitle: PRODUCT_LIBRARY,
  storyLabel: STORY_LABEL,
  scentLabel: SCENT_LABEL,
  spectrumLabel: SPECTRUM_LABEL,
  sellingLabel: SELLING_LABEL,
  videoLabel: VIDEO_LABEL,
  keyNotesLabel: KEYNOTES_LABEL,
};

function mapStateToProps(state) {
  const { fetchingProductDetail, fetchedProductDetail, productDetail, productDetailsError } = state.productDetails;

  return { fetchingProductDetail, fetchedProductDetail, productDetail, productDetailsError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductDetail: (nid, preview, language) => dispatch(getProductDetailActions.getProductDetail(nid, preview, language)),
  }
}

const connectedProductDetail = connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

export default connectedProductDetail;
