/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

/* Import Custom Libraries */
import homepageTrendingActions from './trending.actions';
import Template from '../../Templates/Template';
import { HOME_STORIES_HEADING, SEE_MORE } from '../../../helpers/translations';
import HomeSectionLoader from '../../Loaders/HomeSectionLoader';

class HomepageTrending extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }

    this.renderTrending = this.renderTrending.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.fetchedTrending) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    this.props.getTrending();
  }

  // Product Section
 renderTrending() {
   const { fetchingTrending, fetchedTrending, results } = this.props;

   if (fetchedTrending) {
     if (results && results.length !== 0) {
       return (
         <section className="trending-listing listing text-center">
          <h2 className="page-title section-title">
            {this.props.sectionHeading}
          </h2>
          <Template items={results} md={6} type="news" />
          <Row className="show-more">
            <Col className={"more-link"}>
              <a href={"/news"} className="btn">{this.props.seeMoreLabel}</a>
            </Col>
          </Row>
        </section>
       );
     }
     else {
      return;
     }
   }
   else if (fetchingTrending) {
     return <HomeSectionLoader  type="news" sectionClass="trending-listing listing text-center" itemClass="list-item"/>
   }
 }

  render() {
    return (
      <>
        {this.renderTrending()}
      </>
    )
  }
}

HomepageTrending.propTypes = {
  sectionHeading: PropTypes.string,
  seeMoreLabel: PropTypes.string,
}

HomepageTrending.defaultProps = {
  sectionHeading: HOME_STORIES_HEADING,
  seeMoreLabel: SEE_MORE,
};

function mapStateToProps(state) {
  const { fetchingTrending, fetchedTrending, trending, homepageTrendingError } = state.homepageTrending;

  return { fetchingTrending, fetchedTrending, trending, homepageTrendingError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTrending: () => dispatch(homepageTrendingActions.getTrending()),
  }
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => (
  {
    ...propsFromState,
    ...propsFromDispatch,
    ...ownProps,
    results: propsFromState.trending.results,
    sections: true,
    countEnable: true
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps, mergeProps)(HomepageTrending);

export default connectedComponent;