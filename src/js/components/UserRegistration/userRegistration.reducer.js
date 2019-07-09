import {
  FETCH_REGIONS,
  FETCH_REGIONS_SUCCESS,
  FETCH_REGIONS_FAILURE,
  FETCH_MARKETS,
  FETCH_MARKETS_SUCCESS,
  FETCH_MARKETS_FAILURE,
  FETCH_STORES,
  FETCH_STORES_SUCCESS,
  FETCH_STORES_FAILURE,
  FETCH_RETAILERS,
  FETCH_RETAILERS_SUCCESS,
  FETCH_RETAILERS_FAILURE,
  FETCH_LANGUAGES_LIST,
  FETCH_LANGUAGES_LIST_SUCCESS,
  FETCH_LANGUAGES_LIST_FAILURE,
  FETCH_JOB_TITLE,
  FETCH_JOB_TITLE_SUCCESS,
  FETCH_JOB_TITLE_FAILURE,
  USER_REGISTRATION,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAILURE,
  USER_VALIDATION,
  USER_VALIDATION_SUCCESS,
  USER_VALIDATION_FAILURE,
} from '../../helpers/actionConstants';

export function regions(state = {
  regions: [],
  fetchedRegions: false,
  fetchingRegions: false,
  fetchingRegionsError: false,
}, action) {
  switch (action.type) {
    case FETCH_REGIONS: {
      return {
        ...state,
        fetchingRegions: true,
        fetchedRegions: false
      };
    }
    case FETCH_REGIONS_SUCCESS: {
      return {
        ...state,
        fetchingRegions: false,
        fetchedRegions: true,
        regions: action.payload.data,
        status: action.payload.status,
      };
    }
    case FETCH_REGIONS_FAILURE: {
      return {
        ...state,
        fetchedRegions: false,
        fetchingRegionsError: action.payload,
      };
    }

    default:
      return state;
  }
}

export function markets(state = {
  markets: [],
  fetchedMarkets: false,
  fetchingMarkets: false,
  fetchingMarketsError: false,
}, action) {
  switch (action.type) {
    case FETCH_MARKETS: {
      return {
        ...state,
        fetchingMarkets: true,
        fetchedMarkets: false
      };
    }
    case FETCH_MARKETS_SUCCESS: {
      return {
        ...state,
        fetchingMarkets: false,
        fetchedMarkets: true,
        markets: action.payload.data,
        status: action.payload.status,
      };
    }
    case FETCH_MARKETS_FAILURE: {
      return {
        ...state,
        fetchedMarkets: false,
        fetchingMarketsError: action.payload,
      };
    }

    default:
      return state;
  }
}

export function retailers(state = {
  retailers: [],
  fetchedRetailers: false,
  fetchingRetailers: false,
  fetchingRetailersError: false,
}, action) {
  switch (action.type) {
    case FETCH_RETAILERS: {
      return {
        ...state,
        fetchingRetailers: true,
        fetchedRetailers: false
      };
    }
    case FETCH_RETAILERS_SUCCESS: {
      return {
        ...state,
        fetchingRetailers: false,
        fetchedRetailers: true,
        retailers: action.payload.data,
        retailerStatus: action.payload.status,
      };
    }
    case FETCH_RETAILERS_FAILURE: {
      return {
        ...state,
        fetchedRetailers: false,
        fetchingRetailersError: action.payload,
      };
    }

    default:
      return state;
  }
}

export function stores(state = {
  stores: [],
  fetchedStores: false,
  fetchingStores: false,
  fetchingStoresError: false,
}, action) {
  switch (action.type) {
    case FETCH_STORES: {
      return {
        ...state,
        fetchingStores: true,
        fetchedStores: false
      };
    }
    case FETCH_STORES_SUCCESS: {
      return {
        ...state,
        fetchingStores: false,
        fetchedStores: true,
        stores: action.payload.data,
        storeStatus: action.payload.status,
      };
    }
    case FETCH_STORES_FAILURE: {
      return {
        ...state,
        fetchedStores: false,
        fetchingStoresError: action.payload,
      };
    }

    default:
      return state;
  }
}

export function languages(state = {
  languages: [],
  fetchedLanguages: false,
  fetchingLanguages: false,
  fetchingLanguagesError: false,
  languagesStatus: null
}, action) {
  switch (action.type) {
    case FETCH_LANGUAGES_LIST: {
      return {
        ...state,
        fetchingLanguages: true,
        fetchedLanguages: false
      };
    }
    case FETCH_LANGUAGES_LIST_SUCCESS: {
      return {
        ...state,
        fetchingLanguages: false,
        fetchedLanguages: true,
        languages: action.payload.data,
        languagesStatus: action.payload.status,
      };
    }
    case FETCH_LANGUAGES_LIST_FAILURE: {
      return {
        ...state,
        fetchedLanguages: false,
        fetchingLanguagesError: action.payload,
      };
    }

    default:
      return state;
  }
}

export function jobtitles(state = {
  jobtitles: [],
  fetchedJobTitle: false,
  fetchingJobTitle: false,
  fetchingJobTitleError: false,
  jobtitlesStatus: null
}, action) {
  switch (action.type) {
    case FETCH_JOB_TITLE: {
      return {
        ...state,
        fetchingJobTitle: true,
        fetchedJobTitle: false
      };
    }
    case FETCH_JOB_TITLE_SUCCESS: {
      return {
        ...state,
        fetchingJobTitle: false,
        fetchedJobTitle: true,
        jobtitles: action.payload.data,
        jobtitlesStatus: action.payload.status,
      };
    }
    case FETCH_JOB_TITLE_FAILURE: {
      return {
        ...state,
        fetchedJobTitle: false,
        fetchingJobTitleError: action.payload,
      };
    }

    default:
      return state;
  }
}

export function registration(state = {
  registration: [],
  fetchedRegistration: false,
  fetchingRegistration: false,
  fetchingRegistrationError: false,
  registrationStatus: null
}, action) {
  switch (action.type) {
    case USER_REGISTRATION: {
      return {
        ...state,
        fetchingRegistration: true,
        fetchedRegistration: false
      };
    }
    case USER_REGISTRATION_SUCCESS: {
      return {
        ...state,
        fetchingRegistration: false,
        fetchedRegistration: true,
        registration: action.payload.data,
        registrationStatus: action.payload.status,
      };
    }
    case USER_REGISTRATION_FAILURE: {
      return {
        ...state,
        fetchedRegistration: false,
        fetchingRegistrationError: action.payload,
      };
    }

    default:
      return state;
  }
}

export function userValidation(state = {
  userInfo: {},
  fetchedUserInfo: false,
  fetchingUserInfo: false,
  fetchingUserInfoError: false,
  userInfoStatus: null
}, action) {
  switch (action.type) {
    case USER_VALIDATION: {
      return {
        ...state,
        fetchingUserInfo: true,
        fetchedUserInfo: false
      };
    }
    case USER_VALIDATION_SUCCESS: {
      return {
        ...state,
        fetchingUserInfo: false,
        fetchedUserInfo: true,
        userInfo: action.payload.data,
        userInfoStatus: action.payload.status,
      };
    }
    case USER_VALIDATION_FAILURE: {
      return {
        ...state,
        fetchingUserInfo: false,
        fetchedUserInfo: true,
        UserInfoError: action.payload,
      };
    }

    default:
      return state;
  }
}