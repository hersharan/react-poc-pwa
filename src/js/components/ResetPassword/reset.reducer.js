import {
  RESET_EMAIL,
  RESET_EMAIL_SUCCESS,
  RESET_EMAIL_FAILURE,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from '../../helpers/actionConstants';

export default function resetForget(state = {
  resetError: null,
  emailReset: null,
  fetchingEmailReset: false,
  fetchedEmailReset: false,
  changeError: null,
  changePassword: null,
  fetchingChangePassword: false,
  fetchedChangePassword: false,
}, action) {
  switch (action.type) {
    case RESET_EMAIL: {
      return {
        ...state,
        fetchingEmailReset: true,
        fetchedEmailReset: false,
        resetError: null,
      };
    }
    case RESET_EMAIL_SUCCESS: {
      return {
        ...state,
        fetchingEmailReset: false,
        fetchedEmailReset: true,
        emailReset: action.payload,
      };
    }
    case RESET_EMAIL_FAILURE: {
      return {
        ...state,
        fetchingEmailReset: false,
        fetchedEmailReset: true,
        resetError: action.payload
      };
    }
    case CHANGE_PASSWORD: {
      return {
        ...state,
        fetchingChangePassword: true,
        fetchedChangePassword: false,
        changeError: null,
      };
    }
    case CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        fetchingChangePassword: false,
        fetchedChangePassword: true,
        changePassword: action.payload,
      };
    }
    case CHANGE_PASSWORD_FAILURE: {
      return {
        ...state,
        fetchingChangePassword: false,
        fetchedChangePassword: true,
        changeError: action.payload
      };
    }
    default:
      return state;
  }
}
