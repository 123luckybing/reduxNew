// 概要设计:
// 想要显示一个 todo 项的列表。
// 1.一个 todo 项被点击后，会增加一条删除线并标记 completed。
// 2.会显示用户新增一个 todo 字段。
// 3.在 footer 里显示一个可切换的显示全部/只显示 completed 的/只显示 incompleted 的 todos。

// 思路：展示组件(展示页面)  ---> 容器组件（监听数据、与数据相关操作） -->  redux
import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
    this.reduce = this.reduce.bind(this);
    this.evenAdd = this.evenAdd.bind(this);
    this.await = this.await.bind(this);
  }
  await(store) {
    setTimeout(
      function() {
        store.dispatch({type:"increment"})
      }, 1000);
  }
  evenAdd() {
    this.props.store.dispatch({type:"evenAdd"});
  }
  reduce() {
    this.props.store.dispatch({type:'decrement'});
  }
  add() {
    this.props.store.dispatch({type:'increment'});
  }
  render() {
   let value = this.props.store.getState();
    return (
      <div className="App">
        <button onClick = {this.add}>+</button>
        <span>{value}</span>
        <button onClick={this.reduce}>-</button>
        <button onClick={this.evenAdd}>偶数加</button>
        <button onClick = {() => this.await(this.props.store)}>一秒后加</button>
      </div>
    );
  }
}

export default App;
