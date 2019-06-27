import React from 'react';
import ContentLoader from "react-content-loader";

const TemplateLoader = () => (
  <ContentLoader 
    height={260}
    width={260}
    speed={2}
    primaryColor="#f3eeed"
    secondaryColor="#ecebeb"
  > 
    <rect x="8" y="19" rx="0" ry="0" width="245" height="183" /> 
    <rect x="8" y="213" rx="0" ry="0" width="245" height="15" /> 
    <rect x="67" y="237" rx="0" ry="0" width="125" height="15" />
  </ContentLoader>
);

export default TemplateLoader;
