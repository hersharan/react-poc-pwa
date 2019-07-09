import {
    ADD_ERROR,
    REMOVE_ERROR,
    ADD_ERROR_WITHOUT_LOGOUT
  } from '../../helpers/actionConstants';

  export default function errors(state = {
    error: null,
    caughtError: false,
    errorMessage: '',
  }, action) {
    switch (action.type) {
      case ADD_ERROR: {
        return {
          ...state,
          caughtError: true,
          error: action.payload.response.status,
          errorMessage: action.payload.response.data.message ? action.payload.response.data.message : action.payload.response.data
        };
      }
      case REMOVE_ERROR: {
        return {
          ...state,
          caughtError: false,
          error: null,
          errorMessage: '',
        };
      }
      case ADD_ERROR_WITHOUT_LOGOUT: {
        return {
          ...state,
          caughtError: true,
          logoutBtn: false,
          error: action.payload.response.status,
          errorMessage: action.payload.response.data.message ? action.payload.response.data.message : action.payload.response.data
        };
      }
      default:
        return state;
    }
  }
