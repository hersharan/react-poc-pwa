import {
  FETCH_BRANDS_LEVELS,
  FETCH_BRANDS_LEVELS_SUCCESS,
  FETCH_BRANDS_LEVELS_FAILURE,
} from '../../helpers/actionConstants';

export default function brandLevels(state = {
  fetchingLevelsList: true,
  fetchedLevelsList: false,
  brandlevels: [],
  brandlevelsError: null,
}, action) {
  switch (action.type) {
    case FETCH_BRANDS_LEVELS: {
      return {
        ...state,
        fetchingLevelsList: true,
        fetchedLevelsList: false,
      };
    }
    case FETCH_BRANDS_LEVELS_SUCCESS: {
      return {
        ...state,
        fetchingLevelsList: false,
        fetchedLevelsList: true,
        brandlevels: action.payload.data,
        pager: action.payload.data.pager,
        status: action.payload.status
      };
    }
    case FETCH_BRANDS_LEVELS_FAILURE: {
      return {
        ...state,
        fetchedLevelsList: false,
        brandlevelsError: action.payload,
      };
    }

    default:
      return state;
  }
}
