import axios from 'axios';
import cookie from "react-cookies";

export const token = cookie.load('access_token');

export function getAuthorization() {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  if (typeof token !== "undefined") {
    const config = {
      headers: {
        Authorization: `${token.tokenType} ${token.accessToken}`,
      },
    };

    return config;
  }
}

export async function removeCookie() {
  const token = cookie.load('access_token');
  if (token && typeof token !== "undefined") {
    await cookie.remove("access_token", { path: "/" });
    await cookie.remove("csrfToken", { path: "/" });
    await localStorage.clear();
  }
}

export async function getCrsfToken(token){
  cookie.remove('crsfToken');
  let config = {
    headers: {
      'Authorization': `${token.tokenType} ${token.accessToken}`,
    }
  }
  axios.get('/session/token?_format=json',{}, config)
    .then((response) => {
      let csrfToken = response.data;
      cookie.save('csrfToken', csrfToken.toString(), {path: '/'});
      return csrfToken;
    })
}

export function isLoggedIn(){
  const user = localStorage.getItem('user');
  const userDetails = JSON.parse(user);
  if (token && token !== undefined && typeof token !== "undefined" && user && userDetails.policyFlag) {
    return true;
  }

  return false;
}
