import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getVideoDetails(nid) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_VIDEO_DETAILS' });

    axios.get(`/api/v1/video?_format=json&nid=${nid}`, config)
      .then((response) => {
        dispatch({type: 'FETCH_VIDEO_DETAILS_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_VIDEO_DETAILS_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getVideoDetailsActions = {
  getVideoDetails,
};

export default getVideoDetailsActions;
