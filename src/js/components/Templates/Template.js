/*
  Template For All Listing.

  Props:
    item: <Object> the data of treding story.
    id: <Number> unique key to be given to each tile.
*/
/*
 *  Importing Core Libraries
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardLink,
  CardSubtitle
} from 'reactstrap';
import {GlobalBrandsConsumer, GlobalBrands} from '../GlobalBrands';

/*
 *  Importing Custom Libraries.
 */
import { TEMPLATE_DEFAULT } from '../../helpers/appConstants';
import LazyImages from '../Common/LazyImages';
import { NoContentFound } from '../../helpers/error';

class Template extends Component {
  static contextType = GlobalBrands;
  constructor(props) {
    super(props);

    this.createMarkup = this.createMarkup.bind(this);
    this.getRenderResults = this.getRenderResults.bind(this);
  }

  createMarkup(data) {
    return { __html: data };
  }

  getRenderResults() {
    const { items, type, showBrandTitle, ...attributes } = this.props;
    let link="#";

    if (typeof type !== 'undefined') {
      switch (type) {
        case 'levels':
          link = `/levels/`;
          break;

        case 'products':
        case 'product':
          link = `/product/`;
          break;

        case 'ingredients':
        case 'ingredient':
          link = `/ingredient/`;
          break;

        case 'news':
          link = `/news/`;
          break;

        default:
          link = '#';
          break;
      }
    }

    if (items && items.length !== 0) {
      return items.map((item, idx) => {
        return (
          <Col
            key={idx} xs={12} sm={6} md={4} lg={3} {...attributes} className='list-item text-center'>
            <Card className='listing-block'>
              <CardLink href={`${link}${item.nid ? item.nid : '#' || item.tid ? item.tid : '#'}`}>
                <LazyImages defaultImage={TEMPLATE_DEFAULT} src={item.imageSmall} />
              </CardLink>
              <CardTitle tag='h2'>
                <CardLink href={`${link}${item.nid ? item.nid : '#' || item.tid ? item.tid : '#'}`} dangerouslySetInnerHTML={this.createMarkup(item.displayTitle && item.displayTitle)} />
              </CardTitle>
              {showBrandTitle &&
                (item.brand !== 0 && (
                  <CardSubtitle tag="h3" className="brand-title">
                    {this.context[item.brand]}
                  </CardSubtitle>
                ))}
              {(item.subTitle && this.props.showSubTitle) &&
                <CardSubtitle className="sub-title">
                  <CardLink href={`${link}${item.categoryId || item.nid}`} dangerouslySetInnerHTML={this.createMarkup(item.subTitle)}
                  />
                </CardSubtitle>
              }
            </Card>
          </Col>
        )
      })
    }
    else {
      return NoContentFound(this.props.noDataLabel);
    }
  }

  render() {
    return (
      <GlobalBrandsConsumer>
        {() => {
          return (
            <Row className="section-content">
              {this.getRenderResults()}
            </Row>
          )
        }}
      </GlobalBrandsConsumer>
    );
  }
}

Template.propTypes = {
  items: PropTypes.array.isRequired,
  noDataLabel: PropTypes.string,
  showBrandTitle: PropTypes.bool
}

Template.defaultProps = {
  showBrandTitle: true
};

export default Template;
