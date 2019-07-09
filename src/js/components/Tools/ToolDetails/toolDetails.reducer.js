import {
  FETCH_TOOL_DETAILS,
  FETCH_TOOL_DETAILS_SUCCESS,
  FETCH_TOOL_DETAILS_FAILURE,
} from '../../../helpers/actionConstants';

export default function toolDetails(state = {
  fetchingToolDetails: false,
  fetchedToolDetails: false,
  toolDetails: null,
  toolDetailsError: null,
  status : null
}, action) {
  switch (action.type) {
    case FETCH_TOOL_DETAILS: {
      return {
        ...state,
        fetchingToolDetails: true,
        fetchedToolDetails: false,
        toolDetails: null,
        status: null,
      };
    }
    case FETCH_TOOL_DETAILS_SUCCESS: {
      return {
        ...state,
        fetchingToolDetails: false,
        fetchedToolDetails: true,
        toolDetails: action.payload.data,
        status: action.payload.status
      };
    }
    case FETCH_TOOL_DETAILS_FAILURE: {
      return {
        ...state,
        fetchedToolDetails: false,
        fetchingToolDetails: false,
        toolDetailsError: action.payload,
      };
    }
    default:
      return state;
  }
}
