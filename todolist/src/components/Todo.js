import React, { Component } from 'react';
class Todo extends Component {
  constructor() {
    super();
    this.liClick = this.liClick.bind(this);
  }
  liClick (index,value) {
    this.props.store.dispatch({
      type:'toggle',
      index:index,
      text:value
    });
  }
  render() {
    return(
      <li style={{textDecoration:this.props.complete? 'line-through':'none'}} onClick={(e) =>this.liClick(this.props.index,e.target.innerHTML)}>
        {this.props.elem}
      </li>
    );
  }
}
export default Todo;