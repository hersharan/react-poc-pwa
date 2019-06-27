import axios from 'axios';
import { getAuthorization, token } from '../../helpers/authorization';

const config = getAuthorization();

function getContentStatus(tid) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_INTERACTIVE_CONTENT_STATUS' });

    axios.get(`/lm/api/v1/getIntereactiveStatus?_format=json&token=${token}&tid=${tid}`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_INTERACTIVE_CONTENT_STATUS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_INTERACTIVE_CONTENT_STATUS_FAILURE', payload: error.response.data.message });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

function getContent(nid) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_INTERACTIVE_CONTENT' });

    axios.get(`/api/v1/levelModuleDetail?_format=json&nid=${nid}`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_INTERACTIVE_CONTENT_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_INTERACTIVE_CONTENT_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const getInteractiveContentActions = {
  getContent,
  getContentStatus,
};

export default getInteractiveContentActions;
