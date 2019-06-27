import {
  FETCH_INTERACTIVE_CONTENT,
  FETCH_INTERACTIVE_CONTENT_SUCCESS,
  FETCH_INTERACTIVE_CONTENT_FAILURE,
  FETCH_INTERACTIVE_CONTENT_STATUS,
  FETCH_INTERACTIVE_CONTENT_STATUS_SUCCESS,
  FETCH_INTERACTIVE_CONTENT_STATUS_FAILURE,
} from '../../helpers/actionConstants';

export default function  moduleDetails(state = {
  fetchingInteractiveContent: false,
  fetchedInteractiveContent: false,
  fetchingInteractiveContentStatus: false,
  fetchedInteractiveContentStatus: false,
  interactiveContent: [],
  interactiveContentStatus: [],
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_INTERACTIVE_CONTENT: {
      return {
        ...state,
        fetchingInteractiveContent: true,
        fetchedInteractiveContent: false,
      };
    }
    case FETCH_INTERACTIVE_CONTENT_SUCCESS: {
      return {
        ...state,
        fetchingInteractiveContent: false,
        fetchedInteractiveContent: true,
        interactiveContent: action.payload,
      };
    }
    case FETCH_INTERACTIVE_CONTENT_FAILURE: {
      return {
        ...state,
        fetchedInteractiveContent: false,
        fetchingInteractiveContent: false,
        error: action.payload,
      };
    }
    case FETCH_INTERACTIVE_CONTENT_STATUS: {
      return {
        ...state,
        fetchingInteractiveContentStatus: true,
      };
    }
    case FETCH_INTERACTIVE_CONTENT_STATUS_SUCCESS: {
      return {
        ...state,
        fetchingInteractiveContentStatus: false,
        fetchedInteractiveContentStatus: true,
        interactiveContentStatus: action.payload,
      };
    }
    case FETCH_INTERACTIVE_CONTENT_STATUS_FAILURE: {
      return {
        ...state,
        fetchedInteractiveContentStatus: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
