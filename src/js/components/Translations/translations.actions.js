import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getTranslations() {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_TRANSLATIONS_LIST' });

    axios.get(`/api/v1/translationKey?_format=json`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_TRANSLATIONS_LIST_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_TRANSLATIONS_LIST_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const getTranslationsActions = {
  getTranslations,
};

export default getTranslationsActions;
