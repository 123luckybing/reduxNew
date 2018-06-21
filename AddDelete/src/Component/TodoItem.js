import React, { Component } from 'react';
class TodoItem extends Component {
  constructor() {
    super();
    this.liClick = this.liClick.bind(this);
  }
  liClick(index) {
    this.props.store.dispatch({
      type:'delete',
      index:index
    });
  }
  render() {
    return (
      <li>
        <span>{this.props.elem}</span>
        <button onClick={() => this.liClick(this.props.index)}>delete</button>
      </li>
    );
  }
}
export default TodoItem;