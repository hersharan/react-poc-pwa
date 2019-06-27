import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getLevelsList(brandId, limit, offset) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_BRANDS_LEVELS' });
    axios.get(`/api/v1/learningLevels?_format=json&levelStatus=all&brandId=${brandId}&limit=${limit}&offset=${offset}`, config)
      .then((response) => {
        dispatch({ type: 'FETCH_BRANDS_LEVELS_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_BRANDS_LEVELS_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getBrandsLevelsActions = {
  getLevelsList,
};

export default getBrandsLevelsActions;
