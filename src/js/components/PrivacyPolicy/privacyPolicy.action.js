import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

import { isLoggedIn } from '../../helpers/authorization';

const config = getAuthorization();

function getPrivacyPolicy(language, country) {

  return ((dispatch) => {
    const loggedIn = isLoggedIn();
    let url = loggedIn ? `/api/v1/privacyPolicy` : `/api/v1/globalPrivacyPolicy`;

    dispatch({ type: 'FETCH_PRIVACY_POLICY' });
    axios.get(`${url}?_format=json`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_PRIVACY_POLICY_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_PRIVACY_POLICY_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      })
  });
}

const getPrivacyPolicyAction = {
  getPrivacyPolicy
}

export default getPrivacyPolicyAction;
