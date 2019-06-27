import {
  FETCH_INGREDIENT_DETAIL,
  FETCH_INGREDIENT_DETAIL_SUCCESS,
  FETCH_INGREDIENT_DETAIL_FAILURE,
} from '../../../helpers/actionConstants';

export default function getIngredientDetails(state = {
  fetchingIngredientDetail: false,
  fetchedIngredientDetail: false,
  ingredientDetail: null,
  ingredientDetailsError: null,
}, action) {
  switch (action.type) {
    case FETCH_INGREDIENT_DETAIL: {
      return {
        ...state,
        fetchingIngredientDetail: true,
        fetchedIngredientDetail: false
      };
    }
    case FETCH_INGREDIENT_DETAIL_SUCCESS: {
      return {
        ...state,
        fetchingIngredientDetail: false,
        fetchedIngredientDetail: true,
        ingredientDetail: action.payload.data,
        status: action.payload.status
      };
    }
    case FETCH_INGREDIENT_DETAIL_FAILURE: {
      return {
        ...state,
        fetchedIngredientDetail: false,
        ingredientsDetailError: action.payload,
      };
    }

    default:
      return state;
  }
}
