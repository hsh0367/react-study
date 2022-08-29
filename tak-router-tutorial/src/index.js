import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// * App을 BrowserRouter로 감싸기
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
