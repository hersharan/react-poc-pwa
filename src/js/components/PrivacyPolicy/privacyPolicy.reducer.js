import {
    FETCH_PRIVACY_POLICY,
    FETCH_PRIVACY_POLICY_SUCCESS,
    FETCH_PRIVACY_POLICY_FAILURE
  } from '../../helpers/actionConstants';

  export default function getPrivacyPolicyContent(state = {
    fetchingPolicy: false,
    fetchedPolicy: false,
    policy: null,
    policyError: null,
  }, action) {
    switch (action.type) {
      case FETCH_PRIVACY_POLICY: {
        return {
          ...state,
          fetchingPolicy: true,
          fetchedPolicy: false
        };
      }
      case FETCH_PRIVACY_POLICY_SUCCESS: {
        return {
          ...state,
          fetchingPolicy: false,
          fetchedPolicy: true,
          policy: action.payload[0]
        };
      }
      case FETCH_PRIVACY_POLICY_FAILURE: {
        return {
          ...state,
          fetchedPolicy: false,
          policyError: action.payload
        };
      }

      default:
        return state;
    }
  }
