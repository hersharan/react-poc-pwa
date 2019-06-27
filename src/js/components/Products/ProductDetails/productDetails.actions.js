import axios from 'axios';
import { getAuthorization } from '../../../helpers/authorization';

const config = getAuthorization();

function getProductDetail(nid) {
  return ((dispatch) => {
    dispatch({ type: 'FETCH_PRODUCT_DETAIL' });
    axios.get(`/api/v1/product?_format=json&nid=${nid}`, config)
    .then((response) => {
      dispatch({ type: 'FETCH_PRODUCT_DETAIL_SUCCESS', payload: response });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_PRODUCT_DETAIL_FAILURE', payload: error.response });
      dispatch({ type: "ADD_ERROR", payload: error });
    })
  });
}

const getProductDetailActions = {
  getProductDetail,
};

export default getProductDetailActions;
