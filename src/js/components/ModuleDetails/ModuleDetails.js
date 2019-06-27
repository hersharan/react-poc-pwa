/*
  provide Interactive Content.

  Redux Store Props:
    fetchedInteractiveContent: <Boolean> flag to specify if api has fetched interactive content,
    interactiveContent: <Arrary> the list of fetched comments,
    fetchedInteractiveContentStatus: <Boolean> flag to specify if api has fetched interactive content status,
    interactiveContentStatus: <Any> specifying the status of the interactive content,
    error: <String/ANY> a message from api detailing about error encountered.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterData } from '../../helpers/utils';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import getInteractiveContentActions from './moduleDetails.actions';
import BannerLoader from '../Loaders/BannerLoader';
import HeadingLoader from '../Loaders/HeadingLoader';
import '../../../sass/components/course.scss';
import '../../../sass/components/interective-content.scss';

class ModuleDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iframe: false,
      msgData: "Fetching Content...",
      msgStatus: false
    };

    this.getStatementId = this.getStatementId.bind(this);
    this.goBack = this.goBack.bind(this);
    this.iframStatus = this.iframStatus.bind(this);
    this.errorMsg = this.errorMsg.bind(this);
    this.getInterectiveContent = this.getInterectiveContent.bind(this);
  }

  componentWillMount() {
    const { nid } = this.props.match.params;
    this.props.getContent(nid);
  }

  componentWillReceiveProps(nextProps) {
    // Handling API Status
    if ( nextProps.fetchingNodeUserActivities || nextProps.fetchingInteractiveContent ) {
      this.setState({
        msgData: "Fetching Content...",
        msgStatus: true
      })
    }
    else if ( nextProps.fetchedNodeUserActivities && nextProps.fetchedInteractiveContent) {
      this.setState({
        msgData: "",
        msgStatus: false
      })
    }
    else if (nextProps.error) {
      this.setState({
        msgData: "",
        msgStatus: false
      })
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  errorMsg() {
    return Error('iframe');
  }

  iframStatus() {
    if (this.props.fetchedInteractiveContent && this.props.interactiveContent.articulateFile) {
      let url = this.props.interactiveContent.articulateFile;
      var $this = this;
      fetch(url)
      .then(function(response) {
        if (response.status === 404) {
          $this.setState({
            iframe: 404
          });
        }
      })
    }
  }

  getStatementId() {
    const iframeStyle = {
      width: '100%',
      height: '100vh'
    }

    const { interactiveContent } = this.props;
    return (
      <div className="interective-iframe main-content pt-0">
        <iframe title={interactiveContent.displayTitle} src={interactiveContent.articulateFile} style={iframeStyle} className={classnames({"d-none": this.state.iframe})} frameBorder="0" id="interective-iframe" onLoad={this.iframStatus}></iframe>
        <div className={classnames("iframe-status", {"d-none": !this.state.iframe})}>{this.state.iframe && this.errorMsg()}</div>
      </div>
    )
  }

  getInterectiveContent() {
    const { interactiveContent } = this.props;
    const consolidated = filterData([interactiveContent]);
    if (consolidated !== undefined) {
      const result = consolidated[0];
      return (
        <div className="level-details-content">
          <div className="level-detail-header text-center">
            <div className="sub-heading mt-5 text-center">
              <Link to={`/course/${result.categoryId}`}>{ result.categoryName }</Link>
            </div>
            <div className="page-title col-12">{result.displayTitle}</div>
          </div>
          {this.getStatementId()}
        </div>
      )
    }
    else {
      return <h1 className="no-data">No Content Found</h1>
    }
  }

  render() {
    const { fetchingInteractiveContent } = this.props;
    if(fetchingInteractiveContent){
      return (
        <section className="level-listing mt-5 listing text-center">
        <HeadingLoader />
        <BannerLoader height={1920} width={1080} />
      </section>
      )
    }
    return (
      <div className="interactive-content-wrapper">
        {this.getInterectiveContent()}
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { fetchedInteractiveContent, fetchingInteractiveContent, interactiveContent,  error } = state.moduleDetails;
  return { fetchedInteractiveContent, interactiveContent, fetchingInteractiveContent, error }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getContent: (nid) => dispatch(getInteractiveContentActions.getContent(nid)),
  }
}

const connectedInteractiveContent = connect(mapStateToProps, mapDispatchToProps)(ModuleDetails);

export default connectedInteractiveContent
