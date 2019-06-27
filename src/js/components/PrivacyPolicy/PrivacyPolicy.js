/*
  provide Privacy Policy.

  Redux Store Props:
    policy: <Object> data for policy.
    fetchingPolicy: <Boolean> flag to specify if api is fetching policy,
    fetchedPolicy: <Boolean> flag to specify if api has fetched policy,
    error: <String/ANY> a message from api detailing about error encountered.
*/
/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Col, CardSubtitle } from 'reactstrap';

/* Import Custom Libraries */
import getPrivacyPolicyAction from './privacyPolicy.action';
import { NoContentFound } from '../../helpers/error';
import HeadingLoader from '../Loaders/HeadingLoader';
import DetailsLoader from '../Loaders/DetailsLoader';
import '../../../sass/components/static-content.scss';
import {removeDrupalToolbar} from '../../helpers/utils';

class PrivacyPolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      preview: 0,
      nid: 0
    };

    this.createMarkup = this.createMarkup.bind(this);
    this.getRenderPrivacyPolicy = this.getRenderPrivacyPolicy.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const { preview, nid } = parsed;
    if (preview) {
      this.setState({
        preview: preview,
        data: this.props.policy,
        nid: nid,
      })
    }
    removeDrupalToolbar();
    this.props.getPrivacyPolicy();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = prevState;
    if (state && nextProps.fetchedPolicy && nextProps.policy !== null) {
      return ({
        tnc: nextProps.policy,
      });
    }
    return state;
  }

  createMarkup(data) {
    return { __html: data };
  }

  getRenderPrivacyPolicy() {
    const { policy, fetchingPolicy, fetchedPolicy } = this.props;

    if (fetchedPolicy) {
      if (policy && policy.length !== 0) {
        return (
          <>
            <h1 className="page-title" dangerouslySetInnerHTML={this.createMarkup(policy.title)}></h1>
            {policy.market &&
              <CardSubtitle tag='h3' className="brand-title text-center">{policy.market}</CardSubtitle>
            }
            <Col className="description" dangerouslySetInnerHTML={this.createMarkup(policy.body)}></Col>
          </>
        )
      }
      else if (policy.length === 0) {
        return NoContentFound();
      }
    }
    else if (fetchingPolicy) {
      return (<>
        <HeadingLoader/>
        <DetailsLoader/>
      </>)
    }
  }

  render() {
    return (
      <div className="privacy-policy-wrapper static-content">
        {this.getRenderPrivacyPolicy()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { policy, policyError, fetchingPolicy, fetchedPolicy } = state.privacyPolicy;
  return { policy, policyError, fetchingPolicy, fetchedPolicy }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPrivacyPolicy: (language, country) => dispatch(getPrivacyPolicyAction.getPrivacyPolicy(language,country)),
  }
}

const connectedPrivacyPolicy = connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);

export default  connectedPrivacyPolicy;