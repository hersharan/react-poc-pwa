import {
  FETCH_BRAND_LIST,
  FETCH_BRAND_LIST_SUCCESS,
  FETCH_BRAND_LIST_FAILURE,
} from '../../helpers/actionConstants';

export default function getBrandList(state = {
  fetchingBrandList: false,
  fetchedBrandList: false,
  brandList: [],
  brandListError: null,
}, action) {
  switch (action.type) {
    case FETCH_BRAND_LIST: {
      return {
        ...state,
        fetchingBrandList: true,
        fetchedBrandList: false
      };
    }

    case FETCH_BRAND_LIST_SUCCESS: {
      return {
        ...state,
        fetchingBrandList: false,
        fetchedBrandList: true,
        brandList: action.payload.data,
        status: action.payload.status,
      };
    }

    case FETCH_BRAND_LIST_FAILURE: {
      return {
        ...state,
        fetchedBrandList: false,
        brandListError: action.payload,
      };
    }

    default:
      return state;
  }
}
