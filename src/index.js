import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
