import {
  FETCH_PRIMARY_NAVIGATIONS_LIST,
  FETCH_PRIMARY_NAVIGATIONS_LIST_SUCCESS,
  FETCH_PRIMARY_NAVIGATIONS_LIST_FAILURE,
} from '../../helpers/actionConstants';

export default function getPrimaryNavigations(state = {
  fetchingPrimaryNavigations: false,
  fetchedPrimaryNavigations: false,
  primaryNavigations: [],
  error: null,
}, action) {
  switch(action.type) {
    case FETCH_PRIMARY_NAVIGATIONS_LIST: {
      return {
        ...state,
        fetchingPrimaryNavigations: true,
        fetchedPrimaryNavigations: false,
        primaryNavigations: []
      };
    }
    case FETCH_PRIMARY_NAVIGATIONS_LIST_SUCCESS: {
      return {
        ...state,
        fetchingPrimaryNavigations: false,
        fetchedPrimaryNavigations: true,
        primaryNavigations: action.payload
      };
    }
    case FETCH_PRIMARY_NAVIGATIONS_LIST_FAILURE: {
      return {
        ...state,
        fetchingPrimaryNavigations: false,
        fetchedPrimaryNavigations: false,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
