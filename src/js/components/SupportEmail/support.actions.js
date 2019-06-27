import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getGlobalSupportEmail() {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_GLOBAL_SUPPORT_EMAIL' });

    axios.get(`/api/v1/globalSupportEmail?_format=json`)
      .then((response) => {
        dispatch({ type: 'FETCH_GLOBAL_SUPPORT_EMAIL_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_GLOBAL_SUPPORT_EMAIL_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

function getUserSupportEmail() {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_USER_SUPPORT_EMAIL' });

    axios.get(`/api/v1/supportEmail?_format=json`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_USER_SUPPORT_EMAIL_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_USER_SUPPORT_EMAIL_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const supportActions = {
  getGlobalSupportEmail,
  getUserSupportEmail
};

export default supportActions;
