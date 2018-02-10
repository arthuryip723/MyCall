import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import configureStore from './store/store';
// import BabeIndexContainer from './components/babe/babe_index_container';
import App from './components/app';

const store = configureStore();

document.addEventListener('DOMContentLoaded', function () {
  // <h1>Hello Call!</h1>,
  ReactDOM.render(
    (
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    ),
    document.getElementById('root')
  );
});
