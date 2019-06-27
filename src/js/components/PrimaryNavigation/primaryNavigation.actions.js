import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getPrimaryNavigations() {
  return function(dispatch) {
    dispatch({ type: "FETCH_PRIMARY_NAVIGATIONS_LIST" });
    axios.get('/api/v1/primaryNavigationMenu?_format=json', config)
    .then((response) => {
      dispatch({ type: "FETCH_PRIMARY_NAVIGATIONS_LIST_SUCCESS", payload: response.data })
    })
    .catch((error) => {
      dispatch({ type: "FETCH_PRIMARY_NAVIGATIONS_LIST_FAILURE", payload: error.response })
      dispatch({ type: "ADD_ERROR", payload: error })
    });
  }
}

const primaryNavigations = {
  getPrimaryNavigations,
}
export default primaryNavigations;
