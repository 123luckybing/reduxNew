import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// 引入redux
import { createStore } from 'redux';
// 使用多个reducer--combineReducers
import { combineReducers } from 'redux';
import productsReducer from './Reducer/productsReducer';
import cartReducer from './Reducer/cartReducer';
let rootReducer = combineReducers({ productsReducer, cartReducer});
let store = createStore(rootReducer);

function render() {
  ReactDOM.render(
  <App store = {store}/>, 
  document.getElementById('root'));
}
render();
// 监听数据
registerServiceWorker();
store.subscribe(render);
