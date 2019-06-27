import {
  FETCH_HOMEPAGE_SPOTLIGHT,
  FETCH_HOMEPAGE_SPOTLIGHT_SUCCESS,
  FETCH_HOMEPAGE_SPOTLIGHT_FAILURE,
} from '../../../helpers/actionConstants';

export default function homepageSpotlight(state = {
  fetchingSpotlight: true,
  fetchedSpotlight: false,
  spotlight: [],
  spotlightError: null,
}, action) {
  switch (action.type) {
    case FETCH_HOMEPAGE_SPOTLIGHT: {
      return {
        ...state,
        fetchingSpotlight: true,
      };
    }
    case FETCH_HOMEPAGE_SPOTLIGHT_SUCCESS: {
      return {
        ...state,
        fetchingSpotlight: false,
        fetchedSpotlight: true,
        spotlight: action.payload,
      };
    }
    case FETCH_HOMEPAGE_SPOTLIGHT_FAILURE: {
      return {
        ...state,
        fetchingSpotlight: false,
        fetchedSpotlight: true,
        spotlightError: action.payload,
      };
    }

    default:
      return state;
  }
}
