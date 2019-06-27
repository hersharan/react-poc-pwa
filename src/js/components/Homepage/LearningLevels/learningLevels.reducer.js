import {
  FETCH_HOMEPAGE_LEVELS,
  FETCH_HOMEPAGE_LEVELS_SUCCESS,
  FETCH_HOMEPAGE_LEVELS_FAILURE,
} from '../../../helpers/actionConstants';

export default function homepageLevels(state = {
  fetchingLevelsList: true,
  fetchedLevelsList: false,
  explorelevels: [],
  homeLevelsError: null,
}, action) {
  switch (action.type) {
    case FETCH_HOMEPAGE_LEVELS: {
      return {
        ...state,
        fetchingLevelsList: true,
      };
    }
    case FETCH_HOMEPAGE_LEVELS_SUCCESS: {
      return {
        ...state,
        fetchingLevelsList: false,
        fetchedLevelsList: true,
        explorelevels: action.payload,
      };
    }
    case FETCH_HOMEPAGE_LEVELS_FAILURE: {
      return {
        ...state,
        fetchedLevelsList: false,
        homeLevelsError: action.payload,
      };
    }

    default:
      return state;
  }
}
