import {
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS_FAILURE,
} from '../../../helpers/actionConstants';

export default function userDetails(state = {
  fetchingUserDetails: false,
  fetchedUserDetails: false,
  user: null,
  userDetailsError: null,
}, action) {
  switch (action.type) {
    case FETCH_USER_DETAILS:
      return {
        ...state,
        fetchingUserDetails: true,
        fetchedUserDetails: false,
        user: null,
        userDetailsError: null,
      };
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingUserDetails: false,
        fetchedUserDetails: true,
        user: action.payload,
        userDetailsError: null,
      };
    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        fetchedUserDetails: false,
        userDetailsError: action.payload,
        fetchingUserDetails: false,
        user: null,
      };
    default:
      return state;
  }
}
