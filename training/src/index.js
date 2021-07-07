import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from "./App"
ReactDOM.render(
  <>
  <BrowserRouter>
        <App />
    </BrowserRouter>,
  </>,
  document.getElementById("root")
  
);
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import  {Provider} from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals() 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals()*/