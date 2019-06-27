import {
  FETCH_TRANSLATIONS_LIST,
  FETCH_TRANSLATIONS_LIST_SUCCESS,
  FETCH_TRANSLATIONS_LIST_FAILURE,
} from '../../helpers/actionConstants';

export default function getTranslations(state = {
  fetchingTranslationsList: false,
  fetchedTranslationsList: false,
  translations: [],
  translationsError: null,
}, action) {
  switch (action.type) {
    case FETCH_TRANSLATIONS_LIST: {
      return {
        ...state,
        fetchingTranslationsList: true,
        fetchedTranslationsList: false,
      };
    }
    case FETCH_TRANSLATIONS_LIST_SUCCESS: {
      return {
        ...state,
        fetchingTranslationsList: false,
        fetchedTranslationsList: true,
        translations: action.payload,
      };
    }
    case FETCH_TRANSLATIONS_LIST_FAILURE: {
      return {
        ...state,
        fetchedTranslationsList: false,
        translationsError: action.payload,
      };
    }

    default:
      return state;
  }
}
