import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookies from 'react-cookies';
import { Row } from 'reactstrap';
import queryString from 'query-string';

import getUserLoginAction from './userLogin.actions';
import LoginForm from './LoginForm';
import LoginAccept from '../PrivacyPopup/PrivacyPopup';
import { HOMEPAGE } from '../../helpers/appConstants';
import '../../../sass/components/userlogin.scss';
import supportActions from '../SupportEmail/support.actions';
import NoLoggedInHeader from '../Header/NoLoggedInHeader';
import userDetailsActions from '../User/Details/userDetails.actions';
import logoutActions from '../UserLogout/logout.actions';
import {REGISTRATION_SUCCESS} from '../../helpers/translations';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'rgba(0,0,0,0.3)',
      true: false,
      auth_in_progress: false,
      showAcceptModal: false,
      cred: false,
      showForgot: false,
    }
  }

  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);
    const { registration } = parsed;
    if (registration) {
      this.setState({registration});
    }
    const token = cookies.load('access_token', {path: '/'});
    if (token) {
      this.props.getUserInfo(token);
      this.setState({active: true});
    }
    this.props.getLoginBackground();
    this.props.getGlobalSupportEmail();
  }

  componentWillReceiveProps(nextProps) {
    const { AuthenticatedUserCredentails, AuthenticatingUserCredentails, userLoginCredentails } = nextProps;

    // Fetching Login Background Image
    if (nextProps.loginBackground.backGroundImage !== undefined) {
      this.setState({
        background: nextProps.loginBackground.backGroundImage
      })
    }

    if (AuthenticatingUserCredentails) {
      this.setState({ cred: true })
    }
    else if (AuthenticatedUserCredentails && this.state.cred && userLoginCredentails && userLoginCredentails.length !== '') {
      const cred = JSON.stringify(userLoginCredentails);
      let expires = new Date(new Date(0).setUTCSeconds(userLoginCredentails.expiresIn));
      cookies.save('access_token', cred, { path: '/', expires });
      this.setState({ cred: false });
      nextProps.getUserInfo(userLoginCredentails);
    }

    if (nextProps.fetchedUserDetails) {
      if (nextProps.user && nextProps.user.policyFlag) {
        localStorage.setItem('user', JSON.stringify(nextProps.user));
        this.redirectLogin();
      }
      else {
        // this.setState({showAcceptModal: true});
        this.redirectLogin();
      }
    }
  }

  redirectLogin = () => {
    document.location = HOMEPAGE;
  }

  toggleAcceptModal = () => {
    let flag = !this.state.showAcceptModal;
    this.setState({
      showAcceptModal: flag
    })
  }

  toggleForgot = () => {
    this.setState({
      showForgot: !this.state.showForgot
    })
  }

  render() {
    const { AuthenticatedUserCredentails, AuthenticatingUserCredentails,
      fetchedFooter, fetchingFooter, footer, userLoginError, fetchingSupportEmail,
      fetchedSupportEmail, supportEmail } = this.props;

    return (
      <Row>
        <div className="user-login-wrapper col-12" style={{ backgroundImage: 'url(' + this.state.background + ')' }}>
          <NoLoggedInHeader />
          <div className="user-login">
            {this.state.registration &&
              <div className='msg'>{REGISTRATION_SUCCESS}</div>
            }
            <LoginForm
              isOpen={!this.state.showForgot}
              onSubmitForm={this.toggleAcceptModal}
              login={this.props.submitLogin}
              fetching={AuthenticatingUserCredentails || this.state.active}
              fetched={AuthenticatedUserCredentails}
              userLoginError={userLoginError}
              fetchedFooter={fetchedFooter}
              fetchingFooter={fetchingFooter}
              footer={footer}
              toggleForgot={this.toggleForgot}
              supportEmail={supportEmail}
              fetchedSupportEmail={fetchedSupportEmail}
              fetchingSupportEmail={fetchingSupportEmail}
            />
            <LoginAccept
              isOpen={this.state.showAcceptModal}
              toggle={this.toggleAcceptModal}
              logout={this.props.logout}
              redirectLogin={this.redirectLogin}
              userLoginCredentails={this.props.userLoginCredentails}
              user={this.props.user}
            />
          </div>
        </div>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground, AuthenticatingUserCredentails, AuthenticatedUserCredentails, fetchingLogoutInfo, fetchedLogoutInfo, userLogout, userLoginCredentails } = state.userLogin;

  const { fetchedFooter, fetchingFooter, footer } = state.footer;

  const { fetchingSupportEmail, fetchedSupportEmail, supportError, supportEmail } = state.support;

  const { fetchingUserDetails, fetchedUserDetails, user, userDetailsError } = state.userDetails;

  return {
    fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground,
    AuthenticatingUserCredentails, AuthenticatedUserCredentails, fetchingLogoutInfo, fetchedLogoutInfo,
    userLogout, fetchedFooter, fetchingFooter, footer, userLoginCredentails, fetchingSupportEmail,
    fetchedSupportEmail, supportError, supportEmail, fetchingUserDetails, fetchedUserDetails, user, userDetailsError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginBackground: () => dispatch(getUserLoginAction.getLoginBackground()),
    submitLogin: (user, pass) => dispatch(getUserLoginAction.submitLogin(user, pass)),
    logout: () => dispatch(logoutActions.submitLogout()),
    getGlobalSupportEmail: () => dispatch(supportActions.getGlobalSupportEmail()),
    getUserInfo: (token) => dispatch(userDetailsActions.getUserInfo(token)),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(UserLogin);

export default connectedComponent;
