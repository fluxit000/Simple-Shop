import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

import {BrowserRouter} from 'react-router-dom'

import store from './store';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement as Element);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);