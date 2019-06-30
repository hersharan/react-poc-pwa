import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './js/helpers/store';
import App from './js/components/App';
import ErrorToast from './js/components/Errors/ErrorToast.js'
import * as serviceWorker from './serviceWorker';
import '@babel/polyfill';
import './sass/style.scss';


ReactDOM.render(
  <Provider store={store}>
    <App />
    <ErrorToast />
  </Provider>,
  document.getElementById('react-app-container')
);

serviceWorker.register();
