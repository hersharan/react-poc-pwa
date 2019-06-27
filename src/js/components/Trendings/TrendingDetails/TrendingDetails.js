/*
  provide trending stories details.

  Redux Store Props:
    story: <Array> data for story.
    fetchingStory: <Boolean> flag to specify if api is fetching story,
    fetchedStory: <Boolean> flag to specify if api has fetched story,
    error: <String/ANY> a message from api detailing about error encountered.
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import queryString from 'query-string';

import getTrendingDetailsActions from './trendingDetails.actions';
import LazyImages from '../../Common/LazyImages';
import { BANNER_DEFAULT } from '../../../helpers/appConstants';
import BannerLoader from '../../Loaders/BannerLoader';
import DetailsLoader from '../../Loaders/DetailsLoader';
import '../../../../sass/components/trending-stories.scss';

class TrendingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.story,
      nid: null,
      preview: 0,
    };

    this.getTrendingDetailsTemplate = this.getTrendingDetailsTemplate.bind(this);
  }

  componentDidMount() {
    const { nid } = this.props.match.params;
    const parsed = queryString.parse(this.props.location.search);
    const { preview, language } = parsed;
    if (preview && nid) {
      this.setState({
        preview: preview,
        nid: nid,
      })
    }

    this.props.getStory(nid, preview, language);
  }

  createMarkup(data) {
    return { __html: data };
  }

  getTrendingDetailsTemplate() {
    const { results, fetchingStory, fetchedStory } = this.props;
    const story = results;
    if (fetchedStory) {
      if (results && results.length !== 0) {
        return (
          <div className="story-details">
            <div className="story-content text-center">
              <LazyImages
                defaultImage={BANNER_DEFAULT}
                src={story.imageSmall ? story.imageSmall : BANNER_DEFAULT}
                imageLarge={story.imageLarge ? story.imageLarge : BANNER_DEFAULT}
                imageMedium={story.imageMedium ? story.imageMedium : BANNER_DEFAULT}
                type={'banner'}
              />
              <div className="heading carousel-caption">
                <h3 className="page-title" dangerouslySetInnerHTML={this.createMarkup(story.displayTitle)}></h3>
              </div>
            </div>
            <div className="story-body description">
              <Col xs={12} dangerouslySetInnerHTML={this.createMarkup(story.body)}></Col>
            </div>
          </div>
        )
      }
    }
    else if (fetchingStory) {
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
      <div className="treding-details-wrapper">
        {this.getTrendingDetailsTemplate()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { story, fetchingStory, fetchedStory, fetchedStoryError } = state.trendingDetails;

  return { story, fetchingStory, fetchedStory, fetchedStoryError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStory: (nid, preview, language) => dispatch(getTrendingDetailsActions.getStory(nid, preview, language)),
  }
}


const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  return {
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps,
    results: propsFromState.story.results,
    sections: false,
    countEnable: true
  }
};

const connectedTrendingDetails = connect(mapStateToProps, mapDispatchToProps, mergeProps)(TrendingDetails);

export default connectedTrendingDetails;
