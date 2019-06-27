/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* Import Custom Libraries */
import BannerLoader from '../../Loaders/BannerLoader';
import HeadingLoader from '../../Loaders/HeadingLoader';
import learningLevelsAction from './learningLevels.action';
import LevelTemplate from '../../Templates/Tiles';
import { HOME_LEVELS_HEADING, SEE_MORE } from '../../../helpers/translations';
import { filterData } from '../../../helpers/utils';
import { GlobalBrands } from '../../GlobalBrands';

class ExploreLearningLevels extends Component {
  static contextType = GlobalBrands;

  constructor() {
    super();
    this.state = {
      items: []
    }

    this.renderLevels = this.renderLevels.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.fetchedLevelsList) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    this.props.getLevelsList();
  }

  // Explore Learning Section
  renderLevels() {
    const { fetchingLevelsList, fetchedLevelsList, explorelevels } = this.props;
    if (fetchedLevelsList) {
      const results = filterData(explorelevels.results, explorelevels.userActivity);
      if (results && results.length !== 0) {
        return (
          <section className="level-listing listing text-center row">
            <h2 className="page-title section-title">
              {this.props.sectionHeading}
            </h2>
            <LevelTemplate
              items={results} type="courses"
              showSubTitle={false}
            />
          </section>
        )
      }
    }
    else if (fetchingLevelsList) {
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

ExploreLearningLevels.propTypes = {
  sectionHeading: PropTypes.string,
  seeMoreLabel: PropTypes.string,
}

ExploreLearningLevels.defaultProps = {
  sectionHeading: HOME_LEVELS_HEADING,
  seeMoreLabel: SEE_MORE,
};

function mapStateToProps(state) {
  const { fetchingLevelsList, fetchedLevelsList, explorelevels, homeLevelsError } = state.homepageLevels;

  return { fetchingLevelsList, fetchedLevelsList, explorelevels, homeLevelsError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLevelsList: () => dispatch(learningLevelsAction.getLevelsList()),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ExploreLearningLevels);

export default connectedComponent;