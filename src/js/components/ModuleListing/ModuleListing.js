/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

/* Import Custom Libraries */
import BannerLoader from '../Loaders/BannerLoader';
import HeadingLoader from '../Loaders/HeadingLoader';
import moduleListingActions from './moduleListing.action';
import LevelTemplate from '../Templates/LevelTemplate';
import { SEE_MORE, SCENT_TRAINING } from '../../helpers/translations';
import { LIMIT } from '../../helpers/appConstants';
import withUserActivity from './UserActivity/UserActivity';
import { NoContentFound } from '../../helpers/error';
import '../../../sass/modules/progress.scss';
import '../../../sass/components/course.scss';

class ModuleListing extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      data: []
    }

    this.renderLevels = this.renderLevels.bind(this);
    this.getNextPageContent = this.getNextPageContent.bind(this);
    this.getBrandTitle = this.getBrandTitle.bind(this);
  }

  componentDidMount() {
    const {cid} = this.props.match.params;
    this.props.getModuleList(cid, LIMIT, 0);
  }


  // Fetching Data on Show more Click
  getNextPageContent() {
    const {cid} = this.props.match.params;
    let offset = this.state.data.length;
    this.setState({is_disabled: true});

    this.props.getModuleList(cid, LIMIT, offset);
  }

  getBrandTitle() {
    const { fetchedModuleListing, moduleListing, levelActivity } = this.props;

    if (fetchedModuleListing) {
      return (
        <div className="course mt-3 col-12">
          {moduleListing.levelDetail &&
            <>
              {moduleListing.levelDetail.brandId !== 0 &&
                <p className="sub-heading brand-title">
                  <Link to={`/brand/${moduleListing.levelDetail.brandId}`}>
                    {moduleListing.levelDetail.brandName}
                  </Link>
                </p>
              }
              {moduleListing.levelDetail.scentTraining === 1 &&
                <p className="sub-heading brand-title scent-training">
                  {this.props.scentTraining}
                </p>
              }
              <h2 className="page-title section-title">
                {moduleListing.levelDetail.courseName}
              </h2>
              <div className="progress-wrapper">
                <Progress value={levelActivity && levelActivity.percentageCompleted ? levelActivity.percentageCompleted : 0} />
                <p className="progress-count">{levelActivity &&levelActivity.percentageCompleted ? levelActivity.percentageCompleted : 0}% completed</p>
              </div>
            </>
          }
        </div>
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    const {fetchingModuleListing, fetchedModuleListing, results, pager, updatedActivities } = nextProps;

    if (fetchedModuleListing && pager && this.state.fetched) {
      if (pager.count > LIMIT) {
        this.setState({show: true})
      }
      else {
        this.setState({show: false})
      }
      // Merging Results on showMore.
      this.setState({
        data: [...this.state.data, ...results],
        is_disabled: false,
        fetched: false,
        useractivity: true
      });
    }
    else if (fetchingModuleListing) {
      this.setState({fetched: true})
    }
    else if (updatedActivities) {
      let activity = this.state.data.map(obj => results.find(o => o.nid === obj.nid) || obj);
      this.setState({
        data: activity
      });
    }
  }

  // Explore Learning Section
  renderLevels() {
    const { fetchingModuleListing, fetchedModuleListing, status } = this.props;
    const results = this.state.data;

    if (results && results.length !== 0) {
      return (
        <section className="level-listing courses listing text-center row">
          {this.getBrandTitle()}
          <LevelTemplate
            items={results}
            type="module"
            showBrandName={true}
          />
          <div className={classnames("more-link", { "d-none": !this.state.show })}>
            <button className={classnames("btn btn-outline-secondary text-uppercase", { "disabled": this.state.is_disabled })} onClick={this.getNextPageContent}>{this.props.seeMoreLabel}</button>
          </div>
        </section>
      )
    }
    else if (fetchedModuleListing) {
      if (results.length === 0 && status === 204) {
        return NoContentFound();
      }
    }
    else if (fetchingModuleListing && results.length === 0) {
      return (
        <section className="level-listing listing text-center">
          <HeadingLoader />
          <BannerLoader height={1920} width={1080} />
          <HeadingLoader />
        </section>
      )
    }
  }

  render() {
    return (
      <>
        {this.renderLevels()}
      </>
    )
  }
}

ModuleListing.propTypes = {
  seeMoreLabel: PropTypes.string,
  scentTraining: PropTypes.string,
}

ModuleListing.defaultProps = {
  seeMoreLabel: SEE_MORE,
  scentTraining: SCENT_TRAINING,
};

function mapStateToProps(state) {
  const { fetchingModuleListing, fetchedModuleListing, moduleListing, moduleListingError, pager, status } = state.moduleListing;

  return { fetchingModuleListing, fetchedModuleListing, moduleListing, moduleListingError, pager, status }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getModuleList: (id, limit, offset) => dispatch(moduleListingActions.getModuleList(id, limit, offset)),
  }
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  return {
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps,
    results: propsFromState.moduleListing.results,
    sections: false,
    countEnable: true
  }
};


const connectedComponent = connect(mapStateToProps, mapDispatchToProps, mergeProps)(withUserActivity(ModuleListing));

export default connectedComponent;