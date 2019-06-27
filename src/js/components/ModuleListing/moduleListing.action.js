import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getModuleList(categoryId, limit, offset) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_MODULE_LISTING' });
    axios.get(`/api/v1/levelModules?_format=json&categoryId=${categoryId}&limit=${limit}&offset=${offset}`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_MODULE_LISTING_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_MODULE_LISTING_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const getModuleListingActions = {
  getModuleList,
};

export default getModuleListingActions;
