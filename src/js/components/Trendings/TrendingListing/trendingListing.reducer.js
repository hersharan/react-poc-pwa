import {
  FETCH_TRENDING_LISTING,
  FETCH_TRENDING_LISTING_SUCCESS,
  FETCH_TRENDING_LISTING_FAILURE,
} from '../../../helpers/actionConstants';

export default function getTrendingListing(state = {
  stories: [],
  fetchedStories: false,
  fetchingStories: false,
  fetchingStoriesError: false,
  pager: null,
}, action) {
  switch (action.type) {
    case FETCH_TRENDING_LISTING: {
      return {
        ...state,
        fetchingStories: true,
        fetchedStories: false
      };
    }
    case FETCH_TRENDING_LISTING_SUCCESS: {
      return {
        ...state,
        fetchingStories: false,
        fetchedStories: true,
        stories: action.payload.data,
        pager: action.payload.data.pager,
        status: action.payload.status,
      };
    }
    case FETCH_TRENDING_LISTING_FAILURE: {
      return {
        ...state,
        fetchedStories: false,
        fetchingStoriesError: action.payload,
      };
    }

    default:
      return state;
  }
}
