/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* Import Custom Libraries */
import BannerLoader from '../../Loaders/BannerLoader';
import spotlightActions from './spotlight.actions';
import ELCarousel from '../../Common/ELCarousel';
import { HOME_SPOTLIGHT_LABEL } from '../../../helpers/translations';
import getVideoDetailsActions from '../../Videos/VideoDetails/videoDetails.actions';
import VideoPopup from '../../Templates/Popup';

class HomepageSpotlight extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      video:{},
      modal: false,
    }

    this.renderSpotlight = this.renderSpotlight.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.fetchedSpotlight) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    this.props.getHomePageSpotlight();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.spotlight && nextProps.spotlight.results && nextProps.spotlight.results.length !== 0) {
      var link = null;
      let data = nextProps.spotlight.results.map((items, i) => {
        if (items.type === 'product_detail') {
          link = "/product/" + items.nid
        }
        else if (items.type === 'level_interactive_content') {
          link = "/module/" + items.nid
        }
        else if (items.type === 'stories') {
          link = "/news/" + items.nid;
        }
        items['link'] = link;
        return items;
      });

      this.setState({
        items: data
      })
    }
  }

  // SPotlight Section on Homepage
  renderSpotlight() {
    const { fetchingSpotlight, fetchedSpotlight, spotlight } = this.props;

    if (fetchedSpotlight) {
      if (spotlight && spotlight.length !== 0) {
        return (
          <section className="spotlight">
            <ELCarousel 
              data={this.state.items} 
              responsive={{}} 
              showImage={true}
              showTitle={false} 
              showSubtitle={false} 
              handleClick={this.handleVideo} 
            />
          </section>
        );
      }
    }
    else if (fetchingSpotlight) {
      return <BannerLoader height={1920} width={1080} />
    }
  }

  handleVideo = (data) => {
    if(!this.props.fetchingVideoDetails){
      this.props.getVideoDetails(data.nid);
      this.toggle();
    }
  }

  toggle=()=> {
    this.setState({modal: !this.state.modal});
  }
  render() {
    const { fetchingVideoDetails, videoDetails, fetchedVideoDetails} = this.props;
    return (
      <div className="homepage-spotlight section">
        {this.renderSpotlight()}
        {this.state.modal &&
          <VideoPopup
            fetching={fetchingVideoDetails}
            fetched={fetchedVideoDetails}
            toggle={this.toggle}
            modal={this.state.modal}
            type={'videos'}
            data={videoDetails && videoDetails[0] ? videoDetails[0] : {}}
            className={'popup-wrapper'}
          />
        }
      </div>
    )
  }
}

HomepageSpotlight.propTypes = {
  HomeSpotlightLabel: PropTypes.string,
}

HomepageSpotlight.defaultProps = {
  HomeSpotlightLabel: HOME_SPOTLIGHT_LABEL,
};

function mapStateToProps(state) {
  const { fetchingSpotlight, fetchedSpotlight, spotlight, spotlightError } = state.homepageSpotlight;
  const { fetchingVideoDetails, fetchedVideoDetails, videoDetails, videoDetailsError } = state.videoDetails;

  return {
    fetchingSpotlight, fetchedSpotlight, spotlight, spotlightError,
    fetchingVideoDetails, fetchedVideoDetails, videoDetails, videoDetailsError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomePageSpotlight: () => dispatch(spotlightActions.getSpotlight()),
    getVideoDetails: (nid) => dispatch(getVideoDetailsActions.getVideoDetails(nid)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(HomepageSpotlight);

export default connectedComponent;
