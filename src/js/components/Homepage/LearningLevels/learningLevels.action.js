import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getLevelsList() {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_HOMEPAGE_LEVELS' });
    axios.get('/api/v1/exploreLearningLevels?_format=json', config)
      .then((response) => {
        dispatch({ type: 'FETCH_HOMEPAGE_LEVELS_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_HOMEPAGE_LEVELS_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  });
}

const getHomepageLevelsActions = {
  getLevelsList,
};

export default getHomepageLevelsActions;
