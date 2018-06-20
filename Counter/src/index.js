import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
// 引入redux,
import counter from './Reducers/index';
// 引入函数
let store = createStore(counter);

function render() {
  ReactDOM.render(
  <App store = {store}/>, 
  document.getElementById('root'));
}
render();
store.subscribe(render);
// 监听数据
registerServiceWorker();
