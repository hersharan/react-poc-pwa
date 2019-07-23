import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Card,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import VideoIcon from '../../../images/defaults/video-play-icon.png';
import { GlobalBrandsConsumer, GlobalBrands } from '../GlobalBrands';
import VideoPopup from './Popup';

/*
 *  Importing Custom Libraries.
 */
import { TEMPLATE_DEFAULT, BANNER_DEFAULT } from '../../helpers/appConstants';
import LazyImages from '../Common/LazyImages';
import { getCacheMatch } from '../../helpers/cacheUtils';

class VideoTemplate extends Component {
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

  videoModal(item) {
    let data = getCacheMatch(item.videoUrl);
    if(data){
      console.log(data, 'response from cache load');
    }else{
      this.props.getDetails(item.nid);
    }
    console.log('after ifs',data);
    this.setState({ modal: true });
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  getRenderResults() {
    const { items } = this.props;

    if (items && items.length !== 0) {
      return items.map((item, idx) => {
        return (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className='list-item text-center'>
            <Card className='listing-block'>
              {/* <div className="video-wrapper">
                <LazyImages defaultImage={TEMPLATE_DEFAULT} src={item.videoThumbnail} />
                <div className="video-icon" data-id={item.nid} onClick={() => this.videoModal(item)}>
                  <div className="icon">
                    <img src={VideoIcon} alt={item.title} />
                  </div>
                </div>
              </div> */}
              <video width="360" height="240" controls crossOrigin="anonymous"
                poster={item && item.videoThumbnail ? item.videoThumbnail : BANNER_DEFAULT} 
                autoPlay={false} controlsList="nodownload">
                <source src={item && item.videoUrl} type="video/mp4" />
                {item && item.videoSubtitle && <track src={item && item.videoSubtitle} default></track>}
                Your browser does not support the video tag.
                  </video>
              {item.title &&
                <CardTitle tag='h2' dangerouslySetInnerHTML={this.createMarkup(item.title)} />
              }
              {item.brandName &&
                <CardSubtitle tag='h3' className="brand-title">{item.brandName}</CardSubtitle>
              }
              {item.brand !== 0 &&
                <CardSubtitle tag='h3' className="brand-title">{this.context[item.brand]}</CardSubtitle>
              }
            </Card>
          </Col>
        )
      })
    }
  }

  render() {
    const { fetching, data, type, fetched } = this.props;

    return (
      <GlobalBrandsConsumer>
        {() => {
          return (
            <Row className="section-content">
              {this.getRenderResults()}
              {/* {this.state.modal &&
                <VideoPopup
                  fetching={fetching}
                  fetched={fetched}
                  toggle={this.toggle}
                  modal={this.state.modal}
                  type={type}
                  data={data}
                  videoSrc={data.videoUrl}
                  className={'popup-wrapper'}
                />
              } */}
            </Row>
          )
        }}
      </GlobalBrandsConsumer>
    );
  }
}

VideoTemplate.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  fetching: PropTypes.bool,
  fetched: PropTypes.bool,
  data: PropTypes.object
}

export default VideoTemplate;
