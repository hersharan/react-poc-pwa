import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import PropTypes from 'prop-types';

import '../../../sass/modules/_modal.scss';
import { inlineLoading } from '../../helpers/utils';
import { BANNER_DEFAULT, TEMPLATE_DEFAULT } from '../../helpers/appConstants';
import LazyImages from '../Common/LazyImages';
import {TOOLS_VIEW_LABEL} from '../../helpers/translations';

class Popup extends React.Component {
  createMarkup(data) {
    return { __html: data };
  }
  render() {
    const { toggle, modal, fetching, type, data, fetched } = this.props;

    return (
      <>
        <Modal isOpen={modal} toggle={toggle} className={this.props.className}>
          <div className="modal-header">
            <h5 className="page-title m-0 p-0">{data && data.title}</h5>
            <button type="button" onClick={toggle} className="close"><span aria-hidden="true" >×</span></button>
          </div>
          <ModalBody>
            {type === 'videos' &&
              <div className="video">
                {fetching ? <div className="loader text-center">{inlineLoading()}</div> : null}
                {fetched &&
                  <video width="640" height="360" controls poster={data && data.videoThumbnail ? data.videoThumbnail : BANNER_DEFAULT} autoPlay controlsList="nodownload">
                    <source src={data && data.videoUrl} type="video/mp4" />
                    {data && data.videoSubtitle && <track src={data && data.videoSubtitle} default></track>}
                    Your browser does not support the video tag.
                  </video>
                }
              </div>
            }
            {type === 'tools' &&
              <div className="popup-wrapper pdf">
                {fetching ? <div className="loader text-center">{inlineLoading()}</div> : null}
                {fetched && <>
                  <LazyImages defaultImage={TEMPLATE_DEFAULT} src={data.imageSmall} />
                  <div className="description" dangerouslySetInnerHTML={this.createMarkup(data.description)}>
                  </div>
                  <div className="col more-link">
                    <a className="btn btn-outline-secondary text-uppercase active" href={data.url} target="_blank" rel="noopener noreferrer">{TOOLS_VIEW_LABEL}</a>
                  </div>
                  </>
                }
              </div>
            }
          </ModalBody>
        </Modal>
      </>
    );
  }
}

Popup.propTypes = {
  modal: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

export default Popup;