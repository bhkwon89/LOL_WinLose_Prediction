import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import store from './store/store';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/js/all.js';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

