import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import ForgotForm from './ForgotForm';
import resetForgetActions from '../ResetPassword/reset.actions';
import getUserLoginAction from '../UserLogin/userLogin.actions';

import '../../../sass/components/userlogin.scss';
import NoLoggedInHeader from '../Header/NoLoggedInHeader';

class ChangePassword extends Component {

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
    if (nextProps.fetchedChangePassword && nextProps.changePassword && nextProps.changePassword.message && nextProps.changePassword.message !== '') {
      document.location = '/login';
    }
  }

  render() {
    const { fetchingChangePassword, fetchedChangePassword, changeError, changePassword } = this.props;
    return (
      <Row>
        <div className="user-login-wrapper col-12" style={{ backgroundImage: 'url(' + this.state.background + ')' }}>
          <NoLoggedInHeader/>
          <div className="user-login">
            <ForgotForm
              onSubmitForm={this.props.submitPasswordForReset}
              fetching={fetchingChangePassword}
              fetched={fetchedChangePassword}
              error={changeError}
              changePassword={changePassword}
              resend={this.props.submitEmailForReset}
            />
          </div>
        </div>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { changeError, changePassword, fetchingChangePassword, fetchedChangePassword, resetError, emailReset, fetchingEmailReset, fetchedEmailReset } = state.resetForget;
  const { fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground } = state.userLogin;

  return { changeError, changePassword, fetchingChangePassword, fetchedChangePassword, fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground, resetError, emailReset, fetchingEmailReset, fetchedEmailReset }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPasswordForReset: (email, tempPass, newPass) => dispatch(resetForgetActions.submitPasswordForReset(email, tempPass, newPass)),
    getLoginBackground: () => dispatch(getUserLoginAction.getLoginBackground()),
    submitEmailForReset: (email) => dispatch(resetForgetActions.submitEmailForReset(email)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

export default connectedComponent;
