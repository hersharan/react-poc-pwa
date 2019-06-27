import {
  FETCH_VIDEO_DETAILS,
  FETCH_VIDEO_DETAILS_SUCCESS,
  FETCH_VIDEO_DETAILS_FAILURE,
} from '../../../helpers/actionConstants';

export default function getVideosListing(state = {
  fetchingVideoDetails: false,
  fetchedVideoDetails: false,
  videoDetails: null,
  videoDetailsError: null,
}, action) {
  switch (action.type) {
    case FETCH_VIDEO_DETAILS: {
      return {
        ...state,
        fetchingVideoDetails: true,
        fetchedVideoDetails: false,
        videoDetails: null,
      };
    }
    case FETCH_VIDEO_DETAILS_SUCCESS: {
      return {
        ...state,
        fetchingVideoDetails: false,
        fetchedVideoDetails: true,
        videoDetails: action.payload.data,
        status: action.payload.status
      };
    }
    case FETCH_VIDEO_DETAILS_FAILURE: {
      return {
        ...state,
        fetchedVideoDetails: false,
        fetchingVideoDetails: false,
        videoDetailsError: action.payload,
      };
    }
    default:
      return state;
  }
}
