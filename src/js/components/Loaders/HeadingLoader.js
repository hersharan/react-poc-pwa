import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from "react-content-loader";

const HeadingLoader = (props) => (
  <ContentLoader
    height={22}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="110" y="7" rx="0" ry="0" width="180" height="7" />
  </ContentLoader>
);

HeadingLoader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

HeadingLoader.defaultProps = {
  height: 0,
  width: 0,
};

export default HeadingLoader;