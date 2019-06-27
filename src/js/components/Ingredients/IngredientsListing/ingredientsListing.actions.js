import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getIngredientsListing(limit, offset) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_INGREDIENTS_LIST' });

    axios.get(`/api/v1/ingredients?_format=json&limit=${limit}&offset=${offset}`, config)
      .then((response) => {
        dispatch({type: 'FETCH_INGREDIENTS_LIST_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_INGREDIENTS_LIST_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getIngredientsListingActions = {
  getIngredientsListing,
};

export default getIngredientsListingActions;
