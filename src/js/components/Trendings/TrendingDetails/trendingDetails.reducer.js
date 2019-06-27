import {
  FETCH_STORY_DETAILS,
  FETCH_STORY_DETAILS_SUCCESS,
  FETCH_STORY_DETAILS_FAILURE,
} from '../../../helpers/actionConstants';

export default function getTrendingDetails(state = {
  story: [],
  fetchedStory: false,
  fetchingStory: false,
  fetchedStoryError: null
}, action) {
  switch (action.type) {
    case FETCH_STORY_DETAILS: {
      return {
        ...state,
        fetchingStory: true,
        fetchedStory: false,
      };
    }
    case FETCH_STORY_DETAILS_SUCCESS: {
      return {
        ...state,
        fetchingStory: false,
        fetchedStory: true,
        story: action.payload,
      };
    }
    case FETCH_STORY_DETAILS_FAILURE: {
      return {
        ...state,
        fetchedStory: false,
        fetchedStoryError: action.payload,
      };
    }

    default:
      return state;
  }
}
