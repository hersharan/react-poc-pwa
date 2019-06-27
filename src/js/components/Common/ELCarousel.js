/*
  Provide Products Carousel.
  Props:
    items: <Array> list of items to be shown on carousel.
*/
import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import proptypes from 'prop-types';

import LazyImages from './LazyImages';
import { BANNER_DEFAULT } from '../../helpers/appConstants';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import VideoIcon from '../../../images/defaults/video-play-icon.png';
import '../../../sass/components/videos.scss';

class ELCarousel extends Component {
  constructor() {
    super();
    this.state = {
      showImage: false,
      showTitle: false,
      showSubtitle: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1024: {
          items: 3
        }
      },
      data: [],
    }

    this.carouselData = this.carouselData.bind(this);
  }

  componentDidMount = () => {
    if (this.props.responsive !== undefined) {
      this.setState({
        responsive: this.props.responsive
      })
    }
    this.setState({ data: this.carouselData() });
  }

  componentWillMount() {
    this.setState({
      showImage: this.props.showImage !== undefined ? this.props.showImage : false,
      showTitle: this.props.showTitle !== undefined ? this.props.showTitle : false,
      showSubtitle: this.props.showSubtitle !== undefined ? this.props.showSubtitle : false,
    })
  }

  carouselData() {
    let data = [];
    data = this.props.data.map(element => {
      let imgClass = element.type === 'tools' ? 'video-wrapper' : '';
      return (
        <div onClick={()=>this.handleClick(element)} key={element.nid}>
          {this.state.showImage ?
            <div className={imgClass}>
              <LazyImages defaultImage={BANNER_DEFAULT}
                src={element.imageSmall ? element.imageSmall : BANNER_DEFAULT}
                imageLarge={element.imageLarge ? element.imageLarge : BANNER_DEFAULT}
                imageMedium={element.imageMedium ? element.imageMedium : BANNER_DEFAULT}
                type={'banner'} />
              {
                element.type === "tools" ? <div className="video-icon" data-id={element.nid}>
                  <div className="icon">
                    <img src={VideoIcon} alt={element.title} />
                  </div>
                </div> : null
              }</div> : null}
          {this.state.showTitle ? <h2>{element.title}</h2> : null}
          {this.state.showSubtitle ? <h4>{element.subTitle}</h4> : null}

        </div>
      )
    })
    return data
  }

  handleClick(item) {
    if (item.type !== "tools") {
      document.location.href = item.link
    }
    else {
      this.props.handleClick(item);
    }
  }

  render() {
    if (this.state.data.length === 0) {
      return null
    }
    else {
      return (
        <>
          <AliceCarousel mouseDragEnablede responsive={this.state.responsive}
            mouseDragEnabled={true}
            buttonsDisabled={true}
            items={this.state.data}
            autoPlay={true}
            autoPlayInterval={5000}
            fadeOutAnimation={false}
            infinite={false}
          />
        </>
      )
    }
  };
}

ELCarousel.propTypes = {
  showImage: proptypes.bool,
  showTitle: proptypes.bool,
  showSubtitle: proptypes.bool,
  responsive: proptypes.object,
  data: proptypes.array
}

export default ELCarousel
