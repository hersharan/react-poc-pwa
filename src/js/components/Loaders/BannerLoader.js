import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from "react-content-loader";

const BannerLoader = (props) => (
  <ContentLoader
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    className="row"
  >
    <rect x="0" y="0" rx="0" ry="0" width={props.width} height={props.height} />
  </ContentLoader>
);

BannerLoader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

BannerLoader.defaultProps = {
  height: 0,
  width: 0,
};

export default BannerLoader;
