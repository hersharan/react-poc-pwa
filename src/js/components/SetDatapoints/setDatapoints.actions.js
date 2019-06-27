import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization.js';

const config = getAuthorization();

/*
 *  Body should have these Components.
 *  flag={ favourite / bookmark } & nid={ nid } & status={ 0 / 1 }
 */
function setDatapoints(id, nid, status) {
  const data = {
    flag: id, nid: nid, status: status
  };

  return ((dispatch) => {
    dispatch({ type: 'SET_DATAPOINTS' });
    let csrfToken = null;
    axios.get('/rest/session/token').then((response) => {
      csrfToken = response.data;
      config.headers['X-CSRF-Token'] = csrfToken;

      axios.post('/api/v1/flagsContent/post?_format=json', data, config)
        .then((flagResponse) => {
          dispatch({ type: 'SET_DATAPOINTS_SUCCESS', payload: flagResponse.data });
        })
        .catch((error) => {
          dispatch({ type: 'SET_DATAPOINTS_FAILURE', payload: error.response });
          dispatch({ type: "ADD_ERROR", payload: error })
        });
    });
  });
}

const nodeActivity = {
  setDatapoints,
};

export default nodeActivity;
