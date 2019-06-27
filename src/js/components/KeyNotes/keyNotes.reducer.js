import {
  FETCH_KEYNOTES,
  FETCH_KEYNOTES_SUCCESS,
  FETCH_KEYNOTES_FAILURE,
} from '../../helpers/actionConstants';

export default function getKeynotes(state = {
  fetchingKeynotes: false,
  fetchedKeynotes: false,
  keynotes: [],
  keynotesError: null,
}, action) {
  switch (action.type) {
    case FETCH_KEYNOTES: {
      return {
        ...state,
        fetchingKeynotes: true,
        fetchedKeynotes: false
      };
    }
    case FETCH_KEYNOTES_SUCCESS: {
      return {
        ...state,
        fetchingKeynotes: false,
        fetchedKeynotes: true,
        keynotes: action.payload.data,
        status: action.payload.status
      };
    }
    case FETCH_KEYNOTES_FAILURE: {
      return {
        ...state,
        fetchedKeynotes: false,
        fetchingKeynotes: false,
        keynotesError: action.payload,
      };
    }

    default:
      return state;
  }
}
