import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {
  Row,
} from 'reactstrap';

import getVideosListingActions from './videos.actions';
import getVideoDetailsActions from '../VideoDetails/videoDetails.actions';
import Template from '../../Templates/VideoTemplate';
import { NoContentFound } from '../../../helpers/error';
import { LIMIT } from '../../../helpers/appConstants';
import { VIDEO_LISTING_TITLE, SEE_MORE } from '../../../helpers/translations';
import ListingLoader from '../../Loaders/ListingLoader';
import BrandList from '../../BrandList/BrandList';
import '../../../../sass/components/videos.scss';

class VideosListing extends Component {
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
    this.getVideo = this.getVideo.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const { brand } = parsed;
    const brandId = brand ? brand : this.state.brandId;

    if (brand && brand.length !== 0) {
      this.setState({ brandId: brand })
    }

    this.props.getVideosListing(LIMIT, 0, brandId)
  }

  componentWillReceiveProps(nextProps) {
    const { fetchingVideosList, fetchedVideosList, videosList, pager } = nextProps;
    if (fetchedVideosList && pager && this.state.fetched) {
      if (pager.count > LIMIT) {
        this.setState({ show: true })
      }
      else {
        this.setState({ show: false })
      }

      // Merging Results on showMore.
      this.setState({
        data: [...this.state.data, ...videosList.results],
        is_disabled: false,
        fetched: false
      });
    }
    else if (fetchingVideosList) {
      this.setState({ fetched: true })
    }
  }

  getBrandId(id) {
    this.setState({ brandId: id, data: [] });
    this.props.getVideosListing(LIMIT, 0, id);
  }

  getVideo(nid) {
    this.props.getVideoDetails(nid);
  }

  getListData() {
    const { fetchingVideosList, fetchedVideosList, status, fetchingVideoDetails, fetchedVideoDetails, videoDetails } = this.props;

    let finalData = this.state.data;

    if (finalData && finalData.length !== 0) {
      return (
        <Template
          items={finalData}
          type="videos"
          data={videoDetails && videoDetails[0] ? videoDetails[0] : {}}
          fetching={fetchingVideoDetails}
          fetched={fetchedVideoDetails}
          getDetails={this.getVideo}
        />
      )
    }
    else if (fetchedVideosList) {
      if ((finalData.length === 0 && status === 204)) {
        return NoContentFound();
      }
    }
    else if (fetchingVideosList) {
      return <ListingLoader />
    }
  }

  getNextPageContent() {
    let offset = this.state.data.length;
    this.setState({ is_disabled: true });

    this.props.getVideosListing(LIMIT, offset, this.state.brandId);
  }

  cacheMe = () => {
    function cachePromise(url) {
      return new Promise((resolve, reject) => {
        try {
          const elVideo = document.createElement('video');
          const resolved = () => { console.log('Done--->', url); resolve(); };
          elVideo.src = url;
          elVideo.autoplay = true;
          elVideo.onerror = resolved;
          elVideo.onended = resolved;
          elVideo.volume = 0;
        } catch (e) {

        }
      });
    }
    const ps = this.state.data.map(({ videoUrl }) => cachePromise(videoUrl));
    Promise.all(ps).then(() => console.log('Done all'));
  }

  // Full Page Content
  render() {
    return (
      <div className="videos-listing">
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
        <Row>
          <div className={classnames("col more-link")}>
            <button className={classnames("btn btn-outline-secondary text-uppercase")} onClick={this.cacheMe}>Cache On Click</button>
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

VideosListing.propTypes = {
  sectionHeading: PropTypes.string,
  seeMoreLabel: PropTypes.string,
}

VideosListing.defaultProps = {
  sectionHeading: VIDEO_LISTING_TITLE,
  seeMoreLabel: SEE_MORE,
};

function mapStateToProps(state) {
  const { fetchingVideoDetails, fetchedVideoDetails, videoDetails, videoDetailsError } = state.videoDetails;

  const { fetchingVideosList, fetchedVideosList, videosList, videosListError, pager, status } = state.videosListing;

  return { fetchingVideosList, fetchedVideosList, videosList, videosListError, pager, status, fetchingVideoDetails, fetchedVideoDetails, videoDetails, videoDetailsError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideosListing: (limit, offset, brandId) => dispatch(getVideosListingActions.getVideosListing(limit, offset, brandId)),
    getVideoDetails: (nid) => dispatch(getVideoDetailsActions.getVideoDetails(nid)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(VideosListing);

export default connectedComponent;