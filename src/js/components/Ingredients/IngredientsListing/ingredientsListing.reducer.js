import {
  FETCH_INGREDIENTS_LIST,
  FETCH_INGREDIENTS_LIST_SUCCESS,
  FETCH_INGREDIENTS_LIST_FAILURE,
} from '../../../helpers/actionConstants';

export default function getProductsListing(state = {
  fetchingIngredientsList: false,
  fetchedIngredientsList: false,
  ingredients: [],
  ingredientsListError: null,
}, action) {
  switch (action.type) {
    case FETCH_INGREDIENTS_LIST: {
      return {
        ...state,
        fetchingIngredientsList: true,
        fetchedIngredientsList: false,
        ingredients: [],
      };
    }
    case FETCH_INGREDIENTS_LIST_SUCCESS: {
      return {
        ...state,
        fetchingIngredientsList: false,
        fetchedIngredientsList: true,
        ingredients: action.payload.data,
        pager: action.payload.data.pager,
        status: action.payload.status
      };
    }
    case FETCH_INGREDIENTS_LIST_FAILURE: {
      return {
        ...state,
        fetchedIngredientsList: false,
        ingredientsListError: action.payload,
      };
    }
    default:
      return state;
  }
}
