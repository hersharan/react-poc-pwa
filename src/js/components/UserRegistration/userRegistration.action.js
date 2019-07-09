import axios from 'axios';

function getRegions() {
  return ((dispatch) => {
    dispatch({ type: "FETCH_REGIONS" });
    axios.get('/api/v1/regions?_format=json')
      .then((response) => {
        dispatch({ type: "FETCH_REGIONS_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_REGIONS_FAILURE", payload: error })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

function getMarkets() {
  return ((dispatch) => {
    dispatch({ type: "FETCH_MARKETS" });
    axios.get('/api/v1/markets?_format=json')
      .then((response) => {
        dispatch({ type: "FETCH_MARKETS_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_MARKETS_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

function getLanguages(market) {
  return ((dispatch) => {
    dispatch({ type: "FETCH_LANGUAGES_LIST" });
    axios.get(`/api/v1/languages?_format=json&mid=${market}`)
      .then((response) => {
        dispatch({ type: "FETCH_LANGUAGES_LIST_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_LANGUAGES_LIST_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

function getRetailers(country) {
  return ((dispatch) => {
    dispatch({ type: "FETCH_RETAILERS" });
    axios.get(`/api/v1/retailers?_format=json&country=${country}`)
      .then((response) => {
        dispatch({ type: "FETCH_RETAILERS_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_RETAILERS_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

function getStores(retailer) {
  return ((dispatch) => {
    dispatch({ type: "FETCH_STORES" });
    axios.get(`/api/v1/stores?_format=json&retailer=${retailer}`)
      .then((response) => {
        dispatch({ type: "FETCH_STORES_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_STORES_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

function getJobTitles() {
  return ((dispatch) => {
    dispatch({ type: "FETCH_JOB_TITLE" });
    axios.get(`/api/v1/usersRoles?_format=json`)
      .then((response) => {
        dispatch({ type: "FETCH_JOB_TITLE_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_JOB_TITLE_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

function register(user) {
  return ((dispatch) => {
    dispatch({ type: "USER_REGISTRATION" });
    axios.post(`/api/v1/register?_format=json`, user, {})
      .then((response) => {
        dispatch({ type: "USER_REGISTRATION_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "USER_REGISTRATION_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

function userValidate(email, username) {
  return ((dispatch) => {
    dispatch({ type: "USER_VALIDATION" });
    axios.get(`/api/v1/userValidate?_format=json&email=${email}&username=${username}`)
      .then((response) => {
        dispatch({ type: "USER_VALIDATION_SUCCESS", payload: response })
      })
      .catch((error) => {
        dispatch({ type: "USER_VALIDATION_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR_WITHOUT_LOGOUT", payload: error })
      });
  });
}

const getUserRegistrationAction = {
  getRegions,
  getMarkets,
  getLanguages,
  getRetailers,
  getStores,
  getJobTitles,
  register,
  userValidate
}

export default getUserRegistrationAction;
