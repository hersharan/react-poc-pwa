import {
  FETCH_PRIMARY_NAVIGATIONS_LIST,
  FETCH_PRIMARY_NAVIGATIONS_LIST_SUCCESS,
  FETCH_PRIMARY_NAVIGATIONS_LIST_FAILURE,
  FETCH_BROWSER_CACHE
} from '../../helpers/actionConstants';

export default function getPrimaryNavigations(state = {
  fetchingPrimaryNavigations: false,
  fetchedPrimaryNavigations: false,
  primaryNavigations: [],
  error: null,
  storage: {
    msg: '',
    estimate: {
      quota: 0,
      usage: 0,
    },
  }
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
    case FETCH_BROWSER_CACHE: {
      return {
        ...state,
        storage: action.payload
      }
    }
    default:
      return state;
  }
}
