import {
  FETCH_TOOLS_LISTING,
  FETCH_TOOLS_LISTING_SUCCESS,
  FETCH_TOOLS_LISTING_FAILURE,
} from '../../../helpers/actionConstants';

export default function toolsListing(state = {
  fetchingToolsList: false,
  fetchedToolsList: false,
  toolsList: [],
  toolsListError: null,
  pager: null,
  status: null,
}, action) {
  switch (action.type) {
    case FETCH_TOOLS_LISTING: {
      return {
        ...state,
        fetchingToolsList: true,
        fetchedToolsList: false,
        toolsList: [],
        toolsListError: null,
      };
    }
    case FETCH_TOOLS_LISTING_SUCCESS: {
      return {
        ...state,
        fetchingToolsList: false,
        fetchedToolsList: true,
        toolsList: action.payload.data,
        pager: action.payload.data.pager,
        status: action.payload.status
      };
    }
    case FETCH_TOOLS_LISTING_FAILURE: {
      return {
        ...state,
        fetchedToolsList: false,
        fetchingToolsList: false,
        toolsListError: action.payload,
      };
    }
    default:
      return state;
  }
}
