import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import { GlobalBrandsConsumer, GlobalBrands } from '../../GlobalBrands';
import VideoPopup from '../../Templates/Popup';
import '../../../../sass/components/tools.scss';

/*
 *  Importing Custom Libraries.
 */
import { TEMPLATE_DEFAULT } from '../../../helpers/appConstants';
import LazyImages from '../../Common/LazyImages';

class ToolsListing extends Component {
  static contextType = GlobalBrands;
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }

    this.createMarkup = this.createMarkup.bind(this);
    this.getRenderResults = this.getRenderResults.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  createMarkup(data) {
    return { __html: data };
  }

  toolModal(item){
    this.props.getDetails(item.nid);
    this.setState({modal: true});
  }

  toggle() {
    this.setState({modal: !this.state.modal});
  }

  getRenderResults() {
    const { items } = this.props;
    if (items && items.length !== 0) {
      return items.map((item, idx) => {
        return (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className='list-item text-center'>
            <Card className='listing-block'>
              <div className="video-wrapper" onClick={() => this.toolModal(item)}>
                <LazyImages defaultImage={TEMPLATE_DEFAULT} src={item.imageSmall} />
              </div>
              {item.title &&
                <CardTitle tag='h2' dangerouslySetInnerHTML={this.createMarkup(item.title)} />
              }
              {item.brand !==0 &&
                <CardSubtitle tag='h3' className="brand-title">{this.context[item.brand]}</CardSubtitle>
              }
            </Card>
          </Col>
        )
      })
    }
  }

  render() {
    const {fetching, data, type, fetched} = this.props;

    return (
      <GlobalBrandsConsumer>
        {() => {
          return (
            <Row className="section-content">
              {this.getRenderResults()}
              {this.state.modal &&
                <VideoPopup
                  fetching={fetching}
                  fetched={fetched}
                  toggle={this.toggle}
                  modal={this.state.modal}
                  type={type}
                  data={data}
                  className={'popup-wrapper'}
                />
              }
            </Row>
          )
        }}
      </GlobalBrandsConsumer>
    );
  }
}

ToolsListing.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  fetching: PropTypes.bool,
  fetched: PropTypes.bool,
  data: PropTypes.object
}

export default ToolsListing;
