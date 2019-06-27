import {
  FETCH_FOOTER_MENU,
  FETCH_FOOTER_MENU_SUCCESS,
  FETCH_FOOTER_MENU_FAILURE,
} from '../../helpers/actionConstants';

export default function footer(state = {
  fetchingFooter: false,
  fetchedFooter: false,
  footer: [],
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_FOOTER_MENU: {
      return {
        ...state,
        fetchingFooter: true,
        fetchedFooter: false,
        footer: []
      };
    }
    case FETCH_FOOTER_MENU_SUCCESS: {
      return {
        ...state,
        fetchingFooter: false,
        fetchedFooter: true,
        footer: action.payload
      };
    }
    case FETCH_FOOTER_MENU_FAILURE: {
      return {
        ...state,
        fetchingFooter: false,
        fetchedFooter: true,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
