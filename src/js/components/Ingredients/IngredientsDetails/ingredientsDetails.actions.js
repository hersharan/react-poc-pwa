import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getIngredientDetails(nid) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_INGREDIENT_DETAIL' });
    axios.get(`/api/v1/ingredient?_format=json&nid=${nid}`, config)
    .then((response) => {
      dispatch({ type: 'FETCH_INGREDIENT_DETAIL_SUCCESS', payload: response });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_INGREDIENT_DETAIL_FAILURE', payload: error.response });
      dispatch({ type: "ADD_ERROR", payload: error });
    })
  });
}

const getIngredientsDetailsActions = {
  getIngredientDetails,
};

export default getIngredientsDetailsActions;
