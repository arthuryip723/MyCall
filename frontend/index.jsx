import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import BabeIndexContainer from './components/babe/babe_index_container';

const store = configureStore();

document.addEventListener('DOMContentLoaded', function () {
  // <h1>Hello Call!</h1>,
  ReactDOM.render(
    (
      <Provider store={store}>
        <BabeIndexContainer />
      </Provider>
    ),
    document.getElementById('root')
  );
});
