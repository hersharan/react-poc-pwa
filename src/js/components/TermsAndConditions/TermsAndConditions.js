/*
  provide terms and condition.

  Redux Store Props:
    tnc: <Object> data for tnc.
    fetchingtnc: <Boolean> flag to specify if api is fetching tnc,
    fetchedtnc: <Boolean> flag to specify if api has fetched tnc,
    error: <String/ANY> a message from api detailing about error encountered.
*/
/* Import Core Libraries */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, CardSubtitle } from 'reactstrap';
import queryString from 'query-string';

/* Import Custom Libraries */
import getTermsAndConditionsAction from './termsAndConditions.actions';
import { NoContentFound } from '../../helpers/error';
import HeadingLoader from '../Loaders/HeadingLoader';
import DetailsLoader from '../Loaders/DetailsLoader';
import '../../../sass/components/static-content.scss';
import {removeDrupalToolbar} from '../../helpers/utils';

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      preview: 0,
      nid: 0
    };

    this.createMarkup = this.createMarkup.bind(this);
    this.getRenderTermsAndConditions = this.getRenderTermsAndConditions.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const { preview, nid, language } = parsed;
    if (preview) {
      this.setState({
        preview: preview,
        data: this.props.tnc,
        nid: nid
      })
    }

    removeDrupalToolbar();
    this.props.getTermsAndConditions(nid, preview, language);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = prevState;
    if (state && nextProps.fetchedTnc && nextProps.tnc !== null) {
      return ({
        tnc: nextProps.tnc,
      });
    }
    return state;
  }


  createMarkup(data) {
    return { __html: data };
  }

  getRenderTermsAndConditions() {
    const { tnc, fetchingTnc, fetchedTnc } = this.props;

    if (fetchedTnc) {
      if (tnc && tnc.length !== 0) {
        return (
          <>
            <h1 className="page-title" dangerouslySetInnerHTML={this.createMarkup(tnc.title)}></h1>
            {tnc.market &&
              <CardSubtitle tag='h3' className="brand-title text-center">{tnc.market}</CardSubtitle>
            }
            <Col className="description" dangerouslySetInnerHTML={this.createMarkup(tnc.body)}></Col>
          </>
        )
      }
      else if (tnc && tnc.length === 0) {
        return NoContentFound();
      }
    }
    else if (fetchingTnc) {
      return (
        <>
          <HeadingLoader/>
          <DetailsLoader/>
        </>
      )
    }
  }

  render() {
    return (
      <div className="tnc-wrapper static-content">
        {this.getRenderTermsAndConditions()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { tnc, tncError, fetchingTnc, fetchedTnc } = state.termsAndCondition;

  return { tnc, tncError, fetchingTnc, fetchedTnc }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTermsAndConditions: (language,country) => dispatch(getTermsAndConditionsAction.getTermsAndConditions(language,country)),
  }
}

const connectedTermsAndConditions = connect(mapStateToProps, mapDispatchToProps)(TermsAndConditions);

export default connectedTermsAndConditions;