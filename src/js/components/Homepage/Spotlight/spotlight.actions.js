import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getSpotlight() {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_HOMEPAGE_SPOTLIGHT' });
    axios.get('/api/v1/spotlightSection?_format=json', config)
      .then((response) => {
        dispatch({ type: 'FETCH_HOMEPAGE_SPOTLIGHT_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_HOMEPAGE_SPOTLIGHT_FAILURE', payload: error.response });
      });
  });
}

const getHomepageSpotlightActions = {
  getSpotlight,
};

export default getHomepageSpotlightActions;
