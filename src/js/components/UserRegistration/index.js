import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import getUserLoginAction from '../UserLogin/userLogin.actions';
import RegisterationForm from './UserRegistration';
import NoLoggedInHeader from '../Header/NoLoggedInHeader';
import '../../../sass/components/userlogin.scss';

class UserRegistration extends Component {
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
  }

  render() {
    return (
      <Row>
        <div className="user-login-wrapper col-12" style={{ backgroundImage: 'url(' + this.state.background + ')' }}>
          <NoLoggedInHeader />
          <div className="user-login registration-form">
            <RegisterationForm />
          </div>
        </div>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  const { fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground } = state.userLogin;

  return { fetchingLoginBackground, fetchedLoginBackground, userLoginError, loginBackground }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginBackground: () => dispatch(getUserLoginAction.getLoginBackground()),
  }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(UserRegistration);

export default connectedComponent;
