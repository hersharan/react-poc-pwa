/*
  provide trending stories listing.

  Redux Store Props:
    stories: <Array> list of stories.
    pager: <Object> data for pagination/show more.
    fetchingStories: <Boolean> flag to specify if api is fetching stories,
    fetchedStories: <Boolean> flag to specify if api has fetched stories,
    error: <String/ANY> a message from api detailing about error encountered.
*/
/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/* Import Custom Libraries */
import ListingLoader from '../../Loaders/ListingLoader';
import Template from '../../Templates/Template';
import getTrendingListingActions from './trendingListing.actions';
import { NoContentFound } from '../../../helpers/error';
import { LIMIT } from '../../../helpers/appConstants';
import { STORIES_TITLE, SEE_MORE } from '../../../helpers/translations';
import { replaceData } from '../../../helpers/utils';

class TrendingListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      is_disabled: false,
      show: false,
      fetched: false
    };

    this.getNextPageContent = this.getNextPageContent.bind(this);
    this.renderStories = this.renderStories.bind(this);
  }

  /*
 * Component Life Cycyle Stage.
 */
  componentWillReceiveProps(nextProps) {
    const {results, fetchingStories, fetchedStories, pager, updatedActivities } = nextProps;

    if (fetchedStories && pager && this.state.fetched) {
      if (pager.count > LIMIT) {
        this.setState({show: true})
      }
      else {
        this.setState({show: false})
      }

      // Merging Results on showMore.
      this.setState({
        stories: [...this.state.stories, ...results],
        is_disabled: false,
        fetched: false
      });
    }
    else if (fetchingStories) {
      this.setState({fetched: true})
      if (this.state.stories.length === 0) {
        this.setState({show: false})
      }
    }

    if (!fetchingStories && fetchedStories && updatedActivities) {
      const content = replaceData(this.state.stories, results);
      this.setState({
        stories: content
      })
    }
  }

  getNextPageContent() {
    let offset = this.state.stories.length;
    this.setState({is_disabled: true});

    this.props.getStoriesListing(LIMIT, offset);
  }

  componentDidMount() {
    this.props.getStoriesListing(LIMIT, 0);

    this.setState({
      stories: this.props.stories
    })
  }

  renderStories() {
    const { fetchingStories, fetchedStories, translations, status } = this.props;

    let finalData = this.state.stories;

    if (finalData && finalData.length !== 0) {
      return <Template items={finalData} type="news" />
    }
    else if (fetchedStories) {
      if (finalData.length === 0 && status === 204) {
        return NoContentFound(translations.NoContentFound);
      }
    }
    else if (fetchingStories) {
      return (
        <ListingLoader divClass="story-list text-center row" itemClass="loader-list" type="news"/>
      );
    }
  }

  render() {
    return (
      <div className="trending-listing listing">
        <h1 className="page-title">{this.props.sectionHeading}</h1>
        <div className="story-list text-center">
          {this.renderStories()}
        </div>
        <Row>
          <div className={classnames("col more-link", { "d-none": !this.state.show })}>
            <button className={classnames("btn btn-outline-secondary text-uppercase", { "disabled": this.state.is_disabled })} onClick={this.getNextPageContent}>{this.props.seeMoreLabel}</button>
          </div>
        </Row>
      </div>
    )
  }
}

TrendingListing.propTypes = {
  sectionHeading: PropTypes.string,
  seeMoreLabel: PropTypes.string,
}

TrendingListing.defaultProps = {
  sectionHeading: STORIES_TITLE,
  seeMoreLabel: SEE_MORE,
};

function mapStateToProps(state) {
  const { stories, fetchingStories, fetchedStories, fetchingStoriesError, pager, status } = state.trendingListing;

  return { stories, fetchingStories, fetchedStories, fetchingStoriesError, pager, status }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStoriesListing: (limit, offset) => dispatch(getTrendingListingActions.getStoriesListing(limit, offset)),
  }
}


const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  return {
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps,
    results: propsFromState.stories.results,
    sections: false,
    countEnable: true
  }
};

const connectedTrendingListing = connect(mapStateToProps, mapDispatchToProps, mergeProps)(TrendingListing);

export default connectedTrendingListing;
