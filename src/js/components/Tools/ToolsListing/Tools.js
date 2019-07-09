import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import {
  Row,
} from 'reactstrap';

import getToolsListingActions from './tools.actions';
import getToolDetailsActions from '../ToolDetails/toolDetails.actions';
import Template from './ToolsListing';
import { NoContentFound } from '../../../helpers/error';
import { LIMIT } from '../../../helpers/appConstants';
import { TOOLS_LISTING_TITLE, SEE_MORE } from '../../../helpers/translations';
import ListingLoader from '../../Loaders/ListingLoader';
import BrandList from '../../BrandList/BrandList';
import '../../../../sass/components/videos.scss';
import '../../../../sass/components/tools.scss';

class ToolsListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false,
      fetched: false,
      brandId: 0
    }

    this.getListData = this.getListData.bind(this);
    this.getNextPageContent = this.getNextPageContent.bind(this);
    this.getBrandId = this.getBrandId.bind(this);
    this.getTool = this.getTool.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const { brand } = parsed;
    const brandId = brand ? brand : this.state.brandId;

    if (brand && brand.length !== 0) {
      this.setState({ brandId: brand })
    }

    this.props.getToolsListing(LIMIT, 0, brandId)
  }

  componentWillReceiveProps(nextProps) {
    const { fetchingToolsList, fetchedToolsList, toolsList, pager } = nextProps;
    if (fetchedToolsList && pager && this.state.fetched) {
      if (pager.count > LIMIT) {
        this.setState({ show: true })
      }
      else {
        this.setState({ show: false })
      }

      // Merging Results on showMore.
      this.setState({
        data: [...this.state.data, ...toolsList.results],
        is_disabled: false,
        fetched: false
      });
    }
    else if (fetchingToolsList) {
      this.setState({ fetched: true })
    }
  }

  getBrandId(id) {
    this.setState({ brandId: id, data: [] });
    this.props.getToolsListing(LIMIT, 0, id);
  }

  getTool(nid) {
    this.props.getToolDetails(nid);
  }

  getListData() {
    const { fetchingToolsList, fetchedToolsList, status, fetchingToolDetails, fetchedToolDetails, toolDetails } = this.props;

    let finalData = this.state.data;

    if (finalData && finalData.length !== 0) {
      return (
        <Template
          items={finalData}
          type="tools"
          data={toolDetails && toolDetails[0] ? toolDetails[0] : {}}
          fetching={fetchingToolDetails}
          fetched={fetchedToolDetails}
          getDetails={this.getTool}
        />
      )
    }
    else if (fetchedToolsList) {
      if ((finalData.length === 0 && status === 204)) {
        return NoContentFound();
      }
    }
    else if (fetchingToolsList) {
      return <ListingLoader />
    }
  }

  getNextPageContent() {
    let offset = this.state.data.length;
    this.setState({ is_disabled: true });

    this.props.getToolsListing(LIMIT, offset, this.state.brandId);
  }

  // Full Page Content
  render() {
    return (
      <div className="videos-listing pdf-listing">
        <Row>
          <div className="col content-header">
            <h1 className="page-title">{this.props.sectionHeading}</h1>
          </div>
        </Row>
        <div className="brands">
          <BrandList
            getBrandId={(id) => this.getBrandId(id)}
            defaultBrand={this.state.brandId}
          />
        </div>
        {this.getListData()}
        <Row>
          <div className={classnames("col more-link", { "d-none": !this.state.show })}>
            <button className={classnames("btn btn-outline-secondary text-uppercase", { "disabled": this.state.is_disabled })} onClick={this.getNextPageContent}>{this.props.seeMoreLabel}</button>
          </div>
        </Row>
      </div>
    )
  }
}

ToolsListing.propTypes = {
  sectionHeading: PropTypes.string,
  seeMoreLabel: PropTypes.string,
}

ToolsListing.defaultProps = {
  sectionHeading: TOOLS_LISTING_TITLE,
  seeMoreLabel: SEE_MORE,
};

function mapStateToProps(state) {
  const { fetchingToolDetails, fetchedToolDetails, toolDetails, toolDetailsError } = state.toolDetails;

  const { fetchingToolsList, fetchedToolsList, toolsList, toolsListError, pager, status } = state.toolsListing;

  return { fetchingToolsList, fetchedToolsList, toolsList, toolsListError, pager, status, fetchingToolDetails, fetchedToolDetails, toolDetails, toolDetailsError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToolsListing: (limit, offset, brandId) => dispatch(getToolsListingActions.getToolsListing(limit, offset, brandId)),
    getToolDetails: (nid) => dispatch(getToolDetailsActions.getToolDetails(nid)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ToolsListing);

export default connectedComponent;