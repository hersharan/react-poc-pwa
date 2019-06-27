import axios from 'axios';
import cookies from 'react-cookies';
import { removeCookie } from '../../helpers/authorization';
import { HOMEPAGE } from '../../helpers/appConstants';

function submitLogout() {
  const accessToken = cookies.load('access_token');
  const token = accessToken && accessToken.accessToken;
  localStorage.clear();
  return ((dispatch) => {
    dispatch({ type: "USER_LOGOUT" });
    axios.get('/session/token').then((csrfToken) => {
      axios.post('/api/v1/logout?_format=json', { token }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': csrfToken.data,
        },
      })
        .then((response) => {
          dispatch({ type: "USER_LOGOUT_SUCCESS", payload: response.data })
          if (response.status === 200) {
            removeCookie();
            document.location = '/login';
          }
        })
        .catch((error) => {
          dispatch({ type: "USER_LOGOUT_FAILURE", payload: error.response })
          dispatch({ type: "ADD_ERROR", payload: error })
          document.location = HOMEPAGE;
        });
    });
  });
}

const logoutActions = {
  submitLogout
}

export default logoutActions;