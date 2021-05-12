import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './reducers/counterReducer'

const myStore = createStore(counterReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


