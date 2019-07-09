import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getToolDetails(nid) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_TOOL_DETAILS' });

    axios.get(`/api/v1/tool?_format=json&nid=${nid}`, config)
      .then((response) => {
        dispatch({type: 'FETCH_TOOL_DETAILS_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_TOOL_DETAILS_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getToolDetailsActions = {
  getToolDetails,
};

export default getToolDetailsActions;
