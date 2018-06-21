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
