import {
  FETCH_GLOBAL_SUPPORT_EMAIL ,
  FETCH_GLOBAL_SUPPORT_EMAIL_SUCCESS,
  FETCH_GLOBAL_SUPPORT_EMAIL_FAILURE,
  FETCH_USER_SUPPORT_EMAIL,
  FETCH_USER_SUPPORT_EMAIL_SUCCESS,
  FETCH_USER_SUPPORT_EMAIL_FAILURE,
} from '../../helpers/actionConstants';

export default function support(state = {
  fetchingSupportEmail: false,
  fetchedSupportEmail: false,
  supportError: [],
  supportEmail: '',
}, action) {
  switch (action.type) {
    case FETCH_GLOBAL_SUPPORT_EMAIL: {
      return {
        ...state,
        fetchingSupportEmail: true,
        fetchedSupportEmail: false,
        supportEmail: '',
      };
    }
    case FETCH_GLOBAL_SUPPORT_EMAIL_SUCCESS: {
      return {
        ...state,
        fetchingSupportEmail: false,
        fetchedSupportEmail: true,
        supportEmail: action.payload.supportEmail,
      };
    }
    case FETCH_GLOBAL_SUPPORT_EMAIL_FAILURE: {
      return {
        ...state,
        fetchingSupportEmail: false,
        fetchedSupportEmail: false,
        supportError: action.payload,
      };
    }
    case FETCH_USER_SUPPORT_EMAIL: {
      return {
        ...state,
        fetchingSupportEmail: true,
        fetchedSupportEmail: false,
        supportEmail: '',
      };
    }
    case FETCH_USER_SUPPORT_EMAIL_SUCCESS: {
      return {
        ...state,
        fetchingSupportEmail: false,
        fetchedSupportEmail: true,
        supportEmail: action.payload.supportEmail,
      };
    }
    case FETCH_USER_SUPPORT_EMAIL_FAILURE: {
      return {
        ...state,
        fetchingSupportEmail: false,
        fetchedSupportEmail: false,
        supportError: action.payload,
      };
    }

    default:
      return state;
  }
}
