/*
  Provide Lazy Loadings Images.

  Props:
  defaultImage:<String> default imaage path if no file uploaded.
  src:<String> the image src path of the uploaded file.
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TEMPLATE_DEFAULT } from '../../helpers/appConstants';
import classnames from 'classnames';
import {getBrowserWidth} from '../../helpers/utils';

class LazyImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src ? props.src : props.defaultImage,
      alt: '',
      title: '',
      status: false
    }

    this.Image = React.createRef();
  }

  componentWillMount() {
    let currentElement = this;

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.parentNode.classList.add("lazy-wrapper");
            lazyImage.parentNode.classList.add("image-load");
            lazyImage.src = currentElement.state.src;
            lazyImage.parentNode.style.height = entry.target.height+"px";
            lazyImage.classList.remove("lazy");
            lazyImage.classList.add("lazy-item");
            lazyImage.parentNode.classList.remove("lazy-wrapper");
            lazyImage.parentNode.classList.remove("image-load");
            lazyImage.parentNode.style.height = null;
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      this.Img = lazyImageObserver;
    }
  }

  componentDidMount() {
    this.Img.observe(this.Image.current);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      src: nextProps.src ? nextProps.src : nextProps.defaultImage
    })
  }

  // Categories Listing
  render() {
    return (
      <picture className={classnames({'banner': this.props.type === 'banner'})} style={getBrowserWidth() === 'lg' && this.props.type === 'banner' ? {backgroundImage: `url(${this.props.imageLarge})`}: {}}>
        {this.props.imageLarge &&
          <source media="(min-width: 1081px)" srcSet={this.props.imageLarge} />
        }
        {this.props.imageMedium &&
          <source media="(min-width: 769px)" srcSet={this.props.imageMedium} />
        }
        <img
          className={`lazy lazy-image`}
          src={this.props.defaultImage ? this.props.defaultImage : TEMPLATE_DEFAULT}
          data-src={this.state.src}
          alt={this.state.alt}
          ref={this.Image}
        />
      </picture>
    )
  }
}


LazyImages.propTypes = {
  src: PropTypes.string,
  defaultImage: PropTypes.string,
};

export default LazyImages;
