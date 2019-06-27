import axios from 'axios';
import { removeCookie, getCrsfToken } from '../../helpers/authorization';

function getLoginBackground() {
  return ((dispatch) => {
    dispatch({ type: "FETCH_LOGIN_BACKGROUND" });
    axios.get('/api/v1/loginBackgroundImage?_format=json')
      .then((response) => {
        dispatch({ type: "FETCH_LOGIN_BACKGROUND_SUCCESS", payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_LOGIN_BACKGROUND_FAILURE", payload: error })
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

function submitLogin(user, pass) {
  removeCookie();
  return ((dispatch) => {
    dispatch({ type: "USER_LOGIN" });
    axios.post('/api/v1/login?_format=json', { username: user, password: pass })
      .then((response) => {
        getCrsfToken(response.data);
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: "USER_LOGIN_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const getUserLoginAction = {
  getLoginBackground,
  submitLogin
}

export default getUserLoginAction;
