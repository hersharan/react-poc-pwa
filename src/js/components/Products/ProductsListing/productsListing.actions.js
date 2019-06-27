import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getProductsListing(limit, offset, brandId) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_LIST' });

    axios.get(`/api/v1/products?_format=json&limit=${limit}&offset=${offset}&brand=${brandId}`, config)
      .then((response) => {
        dispatch({type: 'FETCH_PRODUCTS_LIST_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_PRODUCTS_LIST_FAILURE', payload: error.response });
        dispatch({ type: "ADD_ERROR", payload: error });
      });
  });
}

const getProductsListingActions = {
  getProductsListing,
};

export default getProductsListingActions;
