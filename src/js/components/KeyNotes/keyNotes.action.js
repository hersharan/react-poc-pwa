import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getKeynotes(type, nids) {
  const nidConf = nids.map((nid)=>`&nid[]=${nid}`).toString();
  return ((dispatch) => {
    dispatch({ type: 'FETCH_KEYNOTES' });
    axios.get(`/api/v1/keyNotes?_format=json&type=${type}${nidConf}`, config)
    .then((response) => {
      dispatch({ type: 'FETCH_KEYNOTES_SUCCESS', payload: response });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_KEYNOTES_FAILURE', payload: error.response });
      dispatch({ type: "ADD_ERROR", payload: error });
    })
  });
}

const getKeynotesActions = {
  getKeynotes,
};

export default getKeynotesActions;
