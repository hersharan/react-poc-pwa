import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

// to get details of a particular story
function getStory(nid, preview, language) {
  return ((dispatch) => {
    // const previewQuery = preview ? `&preview=1&language=${language}` : '';
    dispatch({ type: 'FETCH_STORY_DETAILS' });
    axios.get(`/api/v1/story?_format=json&nid=${nid}`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_STORY_DETAILS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_STORY_DETAILS_FAILURE', payload: error.response.data.message });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const getTrendingDetailsActions = {
  getStory,
};

export default getTrendingDetailsActions;
