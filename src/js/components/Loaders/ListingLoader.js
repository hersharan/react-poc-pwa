import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import { HOME_LOADER_LIMIT } from '../../helpers/appConstants';
import TemplateLoader from './TemplateLoader';

function ListingLoader(props) {
  let data = [];
  for (let i = 0; i < HOME_LOADER_LIMIT; i++) {
    data.push(<Col xs={12} sm={6} md={4} lg={3} className={props.itemClass} key={`${props.type}_${i}`}><TemplateLoader /></Col>);
  }

  return (
    <Row>
      {data}
    </Row>
  );
}

ListingLoader.propTypes = {
  itemClass: PropTypes.string,
  type: PropTypes.string,
  divClass: PropTypes.string,
}

ListingLoader.defaultProps = {
  itemClass: 'list-item',
  type: 'loader',
  divClass: '',
};

export default ListingLoader;