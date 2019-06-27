import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from "react-content-loader";

const DetailsLoader = (props) => (
  <ContentLoader
    height={200}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="170" y="20" rx="0" ry="0" width="70" height="8" />
    <rect x="0" y="70" rx="2" ry="2" width="300" height="3" />
    <rect x="0" y="50" rx="2" ry="2" width="250" height="3" />
    <rect x="0" y="90" rx="2" ry="2" width="200" height="3" />
  </ContentLoader>
);

DetailsLoader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
}

DetailsLoader.defaultProps = {
  height: 0,
  width: 0,
};

export default DetailsLoader;