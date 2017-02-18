import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'redux-little-router';
import App from './App';
import store from './arcss/store';

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <App />
    </RouterProvider>
  </Provider>,
  document.getElementById('root')
);
