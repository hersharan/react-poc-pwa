import {
  FETCH_PRODUCT_DETAIL,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILURE,
} from '../../../helpers/actionConstants';

export default function getProductDetail(state = {
  fetchingProductDetail: false,
  fetchedProductDetail: false,
  productDetail: null,
  productDetailsError: null,
}, action) {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL: {
      return {
        ...state,
        fetchingProductDetail: true,
        fetchedProductDetail: false
      };
    }
    case FETCH_PRODUCT_DETAIL_SUCCESS: {
      return {
        ...state,
        fetchingProductDetail: false,
        fetchedProductDetail: true,
        productDetail: action.payload.data,
        status: action.payload.status
      };
    }
    case FETCH_PRODUCT_DETAIL_FAILURE: {
      return {
        ...state,
        fetchedProductDetail: false,
        productDetailsError: action.payload,
      };
    }

    default:
      return state;
  }
}
