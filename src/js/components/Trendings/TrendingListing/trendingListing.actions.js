import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

// to get listing of trending stories
function getStoriesListing(limit, offset) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_TRENDING_LISTING' });
    axios.get(`/api/v1/stories?_format=json&limit=${limit}&offset=${offset}`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_TRENDING_LISTING_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_TRENDING_LISTING_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const getTrendingListingActions = {
  getStoriesListing,
};

export default getTrendingListingActions;
