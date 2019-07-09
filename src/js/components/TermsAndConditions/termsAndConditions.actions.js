import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

import { isLoggedIn } from '../../helpers/authorization';

const config = getAuthorization();

function getTermsAndConditions(language, country) {
  const loggedIn = isLoggedIn()
  let url = loggedIn ? `/api/v1/termsAndConditions` : `/api/v1/globalTermsAndCondition`;

  return ((dispatch) => {
    dispatch({ type: 'FETCH_TERMS_CONDITIONS' });
    axios.get(`${url}?_format=json`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_TERMS_CONDITIONS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_TERMS_CONDITIONS_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getTermsAndConditionsAction = {
  getTermsAndConditions,
};

export default getTermsAndConditionsAction;
