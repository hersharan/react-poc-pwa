import axios from 'axios';
import { getAuthorization } from '../../helpers/authorization';

const config = getAuthorization();

function getFooter() {
  return function (dispatch) {
    dispatch({ type: "FETCH_FOOTER_MENU" });
    axios.get('/api/v1/footerMenu?_format=json', config)
      .then((response) => {
        dispatch({ type: "FETCH_FOOTER_MENU_SUCCESS", payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FOOTER_MENU_FAILURE", payload: error.response })
        dispatch({ type: "ADD_ERROR", payload: error })
      });
  }
}

const footerActions = {
  getFooter,
}
export default footerActions;
