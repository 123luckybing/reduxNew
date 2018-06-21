import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor() {
    super();
    this.add = this.add.bind(this);
  }
  add() {
    this.props.store.dispatch({
      type:'add',
      value:this.refs.input.value
    });
    this.refs.input.value= '';
  }
  render() {
    const store = this.props.store;
    const todoList = store.getState().map( (elem,index) => {
      return(
        <TodoItem key={index} elem = {elem} index={index} store={this.props.store}/>
      );
    });
    return(
      <div>
        <input type="text" ref='input'/>
        <button onClick={this.add}>Add</button>
        {todoList}
      </div>
    );
  }
}
export default TodoList;