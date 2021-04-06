import './index.css';

import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './Components/Redux/Store';

axios.defaults.baseURL = "https://maemanager.herokuapp.com/api/";
//axios.defaults.baseURL = "http://localhost:3001/api";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
