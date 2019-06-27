import {
  FETCH_VIDEO_LISTING,
  FETCH_VIDEO_LISTING_SUCCESS,
  FETCH_VIDEO_LISTING_FAILURE,
} from '../../../helpers/actionConstants';

export default function getVideosListing(state = {
  fetchingVideosList: false,
  fetchedVideosList: false,
  videosList: [],
  videosListError: null,
}, action) {
  switch (action.type) {
    case FETCH_VIDEO_LISTING: {
      return {
        ...state,
        fetchingVideosList: true,
        fetchedVideosList: false,
        videosList: [],
      };
    }
    case FETCH_VIDEO_LISTING_SUCCESS: {
      return {
        ...state,
        fetchingVideosList: false,
        fetchedVideosList: true,
        videosList: action.payload.data,
        pager: action.payload.data.pager,
        status: action.payload.status
      };
    }
    case FETCH_VIDEO_LISTING_FAILURE: {
      return {
        ...state,
        fetchedVideosList: false,
        fetchingVideosList: false,
        videosListError: action.payload,
      };
    }
    default:
      return state;
  }
}
