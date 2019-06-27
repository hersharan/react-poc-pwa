import {
    FETCH_TERMS_CONDITIONS,
    FETCH_TERMS_CONDITIONS_SUCCESS,
    FETCH_TERMS_CONDITIONS_FAILURE,
  } from '../../helpers/actionConstants';

  export default function getTermsAndConditions(state = {
    fetchingTnc: false,
    fetchedTnc: false,
    tnc: null,
    tncError: null,
  }, action) {
    switch (action.type) {
      case FETCH_TERMS_CONDITIONS: {
        return {
          ...state,
          fetchingTnc: true
        };
      }
      case FETCH_TERMS_CONDITIONS_SUCCESS: {
        return {
          ...state,
          fetchingTnc: false,
          fetchedTnc: true,
          tnc: action.payload[0]
        };
      }
      case FETCH_TERMS_CONDITIONS_FAILURE: {
        return {
          ...state,
          fetchedTnc: false,
          tncError: action.payload
        };
      }

      default:
        return state;
    }
  }
