import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import ResetForm from './ResetForm';
import resetForgetActions from './reset.actions';
import getUserLoginAction from '../UserLogin/userLogin.actions';

import '../../../sass/components/userlogin.scss';
import NoLoggedInHeader from '../Header/NoLoggedInHeader';


class ResetPassword extends Component {

  state = {
    background: '',
  }

  componentDidMount() {
    this.props.getLoginBackground();
  }

  componentWillReceiveProps(nextProps) {
    // Fetching Login Background Image
    if (nextProps.loginBackground.backGroundImage !== undefined) {
      this.setState({
        background: nextProps.loginBackground.backGroundImage
      })
    }
    if(nextProps.fetchedEmailReset && nextProps.emailReset && nextProps.emailReset.message && nextProps.emailReset.message !== ''){
      document.location = '/confirm-password';
    }
  }

  render() {
    const { fetchingEmailReset, fetchedEmailReset, resetError, emailReset} = this.props;
    return (
      <Row>
        <div className="user-login-wrapper col-12" style={{ backgroundImage: 'url(' + this.state.background + ')' }}>
          <NoLoggedInHeader/>
          <div className="user-login">
            <ResetForm
              onSubmitForm={this.props.submitEmailForReset}
              fetching={fetchingEmailReset}
              fetched={fetchedEmailReset}
              error={resetError}
              emailReset = {emailReset}
            />
          </div>
        </div>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { resetError, emailReset, fetchingEmailReset, fetchedEmailReset } = state.resetForget;
  const { fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground } = state.userLogin;

  return { resetError, emailReset, fetchingEmailReset, fetchedEmailReset, fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitEmailForReset: (email) => dispatch(resetForgetActions.submitEmailForReset(email)),
    getLoginBackground: () => dispatch(getUserLoginAction.getLoginBackground()),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

export default connectedComponent;
