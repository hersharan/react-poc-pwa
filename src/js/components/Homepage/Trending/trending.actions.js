import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getTrending() {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_HOMEPAGE_TRENDING' });
    axios.get('/api/v1/storiesTrendingSection?_format=json', config)
      .then((response) => {
        dispatch({ type: 'FETCH_HOMEPAGE_TRENDING_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_HOMEPAGE_TRENDING_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getHomepageTrendingActions = {
  getTrending,
};

export default getHomepageTrendingActions;
