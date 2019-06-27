import {
  FETCH_MODULE_LISTING,
  FETCH_MODULE_LISTING_SUCCESS,
  FETCH_MODULE_LISTING_FAILURE,
} from '../../helpers/actionConstants';

export default function getModuleListing(state = {
  fetchingModuleListing: false,
  fetchedModuleListing: false,
  moduleListing: [],
  moduleListingError: null,
}, action) {
  switch (action.type) {
    case FETCH_MODULE_LISTING: {
      return {
        ...state,
        fetchingModuleListing: true,
        fetchedModuleListing: false,
      };
    }
    case FETCH_MODULE_LISTING_SUCCESS: {
      return {
        ...state,
        fetchingModuleListing: false,
        fetchedModuleListing: true,
        moduleListing: action.payload.data,
        pager: action.payload.data.pager,
        status: action.payload.status
      };
    }
    case FETCH_MODULE_LISTING_FAILURE: {
      return {
        ...state,
        fetchingModuleListing: false,
        fetchedModuleListing: false,
        moduleListingError: action.payload,
      };
    }

    default:
      return state;
  }
}
