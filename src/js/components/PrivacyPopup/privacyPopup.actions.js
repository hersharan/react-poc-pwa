/*
  Update User Flag
 */
import axios from 'axios';
import cookie from 'react-cookies';
import { getAuthorization } from '../../helpers/authorization';

let config = getAuthorization();

// Update user's privacy flag
function updateUserFlag(token) {
  if(!config){
    config = {
      headers: {
        Authorization: `${token.tokenType} ${token.accessToken}`,
        'X-CSRF-Token': cookie.load('csrfToken'),
      },
    };
  }
  else {
    config.headers['X-CSRF-Token'] = cookie.load('csrfToken');
  }
  return ((dispatch) => {
    dispatch({ type: 'UPDATE_USER_FLAG' });
    // Get User Data.
    axios.post(`/api/v1/userPolicyFlag?_format=json`, {flagStatus: 1}, config)
      .then((response) => {
        dispatch({ type: 'UPDATE_USER_FLAG_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_USER_FLAG_FAILURE', payload: error.response.data.message });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const userFlagActions = {
  updateUserFlag,
};

export default userFlagActions;
