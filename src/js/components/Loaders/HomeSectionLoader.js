import React from 'react';
import PropTypes from 'prop-types';

import { Row, Container, Col } from 'reactstrap';
import { HOME_LOADER_LIMIT } from '../../helpers/appConstants';
import TemplateLoader from './TemplateLoader';
import HeadingLoader from './HeadingLoader';

function HomeSectionLoader(props) {
  let data = [];
  for(let i=0; i< HOME_LOADER_LIMIT; i++){
    data.push(<Col key={`${props.type}_${i}`} xs={12} sm={6} lg={3} className={props.itemClass}><TemplateLoader /></Col>);
  }

  return (
    <section className={props.sectionClass}>
      <Container>
        <HeadingLoader />
        <Row>
          {data}
        </Row>
      </Container>
    </section>
  );
}

HomeSectionLoader.propTypes = {
  itemClass: PropTypes.string,
  sectionClass: PropTypes.string,
  type: PropTypes.string,
  divClass: PropTypes.string,
}

HomeSectionLoader.defaultProps = {
  itemClass: 'list-item',
  type: 'home',
  sectionClass: '',
  divClass: '',
};

export default HomeSectionLoader;