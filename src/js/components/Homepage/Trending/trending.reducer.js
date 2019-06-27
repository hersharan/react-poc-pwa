import {
  FETCH_HOMEPAGE_TRENDING,
  FETCH_HOMEPAGE_TRENDING_SUCCESS,
  FETCH_HOMEPAGE_TRENDING_FAILURE,
} from '../../../helpers/actionConstants';

export default function homepageTrending(state = {
  fetchingTrending: true,
  fetchedTrending: false,
  trending: [],
  homepageTrendingError: null,
}, action) {
  switch (action.type) {
    case FETCH_HOMEPAGE_TRENDING: {
      return {
        ...state,
        fetchingTrending: true,
        fetchedTrending: false,
      };
    }
    case FETCH_HOMEPAGE_TRENDING_SUCCESS: {
      return {
        ...state,
        fetchingTrending: false,
        fetchedTrending: true,
        trending: action.payload,
      };
    }
    case FETCH_HOMEPAGE_TRENDING_FAILURE: {
      return {
        ...state,
        fetchedTrending: false,
        homepageTrendingError: action.payload,
      };
    }
    default:
      return state;
  }
}
