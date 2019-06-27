/*
  Provide Videos Popup.
*/
import React, { Component } from 'react';
import { Modal, ModalBody, Row, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../Common/Loader';
import '../../../sass/modules/_modal.scss';
import userFlagActions from './privacyPopup.actions';
import { inlineLoading, removeDrupalToolbar } from '../../helpers/utils';

class LoginAccept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agree1: false,
      agree2: false,
      active: false
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    removeDrupalToolbar();
  }

  acceptLogin = () => {
    if (this.state.agree1 && this.state.agree2) {
      this.props.updateUserFlag(this.props.userLoginCredentails);
    }
  }

  toggleCheckbox = (e) => {
    let id = document.getElementById(e.target.id);
    const name = e.target.name;
    const value = id.checked;
    this.setState({
      [name]: value
    })
  }

  logout = () => {
    this.setState({logout: true});
    this.props.logout();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.updateUserFlag) {
      if (nextProps.userFlag) {
        nextProps.redirectLogin();
      }
      else {
        const user = localStorage.getItem('user');
        if (user) {
          const userDetails = JSON.parse(user);
          userDetails.policyFlag = true;
          localStorage.setItem('user', JSON.stringify(userDetails));
        }
      }
    }
  }

  render() {
    const { isOpen, updatingUserFlag, updatedUserFlag } = this.props;

    return (
      <Modal className="tool-modal" isOpen={isOpen} centered={true}>
        {updatingUserFlag || this.state.logout || updatedUserFlag ? <div className="loader text-center">{inlineLoading()}</div> : null}
        <div className="modal-header">
          <button type="button" onClick={this.logout} className="close"><span aria-hidden="true">×</span></button>
        </div>
        {isOpen ?
          <ModalBody>
            <FormGroup check>
              <Label check for="agree1" className={classnames({ "active": this.state.agree1 })} disabled={updatingUserFlag}>
                <Input
                  type="checkbox"
                  id="agree1"
                  name="agree1"
                  value={this.state.agree1}
                  onChange={this.toggleCheckbox}
                />
                I have read, understand and agree to the <a href="/terms-and-conditions" target="_blank">terms and conditions</a>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check for="agree2" className={classnames({ "active": this.state.agree2 })}>
                <Input type="checkbox" id="agree2" name="agree2" value={this.state.agree2}
                  onChange={this.toggleCheckbox} disabled={updatingUserFlag}/>{' '}
                I have read, understand and agree to the privacy policy.
              Personal data will be used to create and manage your account,
              including to send transactional emails about your account.
              Personal data may be stored outside your country of residence.
              For more information on our privacy practices, your rights and hour to exercise these rights.
            Please see our <a href="/privacy-policy" target="_blank">Privacy Policy.</a>
              </Label>
            </FormGroup>
            <Row className="text-center">
              <div className="col more-link">
                <button className={classnames(`btn btn-outline-secondary text-uppercase`, {"active": this.state.agree1 && this.state.agree2}, {"disabled": !(this.state.agree1 && this.state.agree2)})} onClick={this.acceptLogin}>{'Accept'}</button>
              </div>
            </Row>
          </ModalBody> : <Loader />}
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  const { updatingUserFlag, updatedUserFlag, userFlag, userFlagError } = state.userFlag;

  return { updatingUserFlag, updatedUserFlag, userFlag, userFlagError }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserFlag: (userLoginCredentails) => dispatch(userFlagActions.updateUserFlag(userLoginCredentails)),
  }
}

LoginAccept.propTypes = {
  isOpen: PropTypes.bool,
}

LoginAccept.defaultProps = {
  isOpen: false,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(LoginAccept);

export default connectedComponent;
