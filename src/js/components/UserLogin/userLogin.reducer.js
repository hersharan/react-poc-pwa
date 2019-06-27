import {
  FETCH_LOGIN_BACKGROUND,
  FETCH_LOGIN_BACKGROUND_SUCCESS,
  FETCH_LOGIN_BACKGROUND_FAILURE,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
} from '../../helpers/actionConstants';

export default function userLogin(state = {
  fetchingLoginBackground: false,
  fetchedLoginBackground: false,
  AuthenticatingUserCredentails: false,
  AuthenticatedUserCredentails: false,
  fetchingLogoutInfo: false,
  fetchedLogoutInfo: false,
  loginBackground: [],
  userLoginCredentails: null,
  userLogout: [],
  error: null,
  userLoginError: null,
}, action) {
  switch (action.type) {
    case FETCH_LOGIN_BACKGROUND: {
      return {
        ...state,
        fetchingLoginBackground: true,
        fetchedLoginBackground: false,
      };
    }
    case FETCH_LOGIN_BACKGROUND_SUCCESS: {
      return {
        ...state,
        fetchingLoginBackground: false,
        fetchedLoginBackground: true,
        loginBackground: action.payload,
      };
    }
    case FETCH_LOGIN_BACKGROUND_FAILURE: {
      return {
        ...state,
        fetchingLoginBackground: false,
        fetchedLoginBackground: false,
        loginBackgorundError: action.payload
      };
    }
    case USER_LOGIN: {
      return {
        ...state,
        AuthenticatingUserCredentails: true,
        AuthenticatedUserCredentails: false,
        userLoginCredentails: null,
        userLoginError: null,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        AuthenticatingUserCredentails: false,
        AuthenticatedUserCredentails: true,
        userLoginCredentails: action.payload,
      };
    }
    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        AuthenticatingUserCredentails: false,
        AuthenticatedUserCredentails: true,
        userLoginError: action.payload.data
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        fetchingLogoutInfo: true,
        fetchedLogoutInfo: false,
        userLogout: [],
        userLogoutError: null,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        fetchingLogoutInfo: false,
        fetchedLogoutInfo: true,
        userLogout: action.payload
      };
    }
    case USER_LOGOUT_FAILURE: {
      return {
        ...state,
        fetchingLogoutInfo: false,
        fetchedLogoutInfo: true,
        userLogoutError: action.payload
      };
    }
    default:
      return state;
  }
}
