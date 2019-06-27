import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './js/helpers/store';
import App from './js/components/App';
import ErrorToast from './js/components/Errors/ErrorToast.js'
import * as serviceWorker from './serviceWorker';
import '@babel/polyfill';
import './sass/style.scss';


let path = window.location.pathname;

// Drupal Admin bar
const adminBar = document.getElementById('toolbar-item-administration');
if (adminBar) {
  window.addEventListener('load', function() {
    adminBar.click();
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ErrorToast />
  </Provider>,
  document.getElementById('react-app-container')
);

if (path.indexOf('/admin') !== '-1' || path.indexOf('/node') !== '-1' || path.indexOf('/user/reset') !== '-1') {
  serviceWorker.unregister();
}

// serviceWorker.register();
