import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import AppContainer from './app_container';

window.store = store;

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  )
})
