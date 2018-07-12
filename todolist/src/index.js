
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//  三行写在registerServiceWorker 下面,否则报错
import { createStore } from 'redux';
import reducer from './reducer/index';
let store = createStore(reducer);

function render() {
  ReactDOM.render(
  <App store ={store} />, 
  document.getElementById('root'));
}
render();
store.subscribe(render);
registerServiceWorker();
