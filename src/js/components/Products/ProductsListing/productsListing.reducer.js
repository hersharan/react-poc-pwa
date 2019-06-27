import {
  FETCH_PRODUCTS_LIST,
  FETCH_PRODUCTS_LIST_SUCCESS,
  FETCH_PRODUCTS_LIST_FAILURE,
} from '../../../helpers/actionConstants';

export default function getProductsListing(state = {
  fetchingProductsList: false,
  fetchedProductsList: false,
  productsList: [],
  productListError: null,
}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_LIST: {
      return {
        ...state,
        fetchingProductsList: true,
        fetchedProductsList: false,
        productsList: [],
      };
    }
    case FETCH_PRODUCTS_LIST_SUCCESS: {
      return {
        ...state,
        fetchingProductsList: false,
        fetchedProductsList: true,
        productsList: action.payload.data,
        pager: action.payload.data.pager,
        status: action.payload.status
      };
    }
    case FETCH_PRODUCTS_LIST_FAILURE: {
      return {
        ...state,
        fetchedProductsList: false,
        fetchingProductsList: false,
        productListError: action.payload,
      };
    }
    default:
      return state;
  }
}
