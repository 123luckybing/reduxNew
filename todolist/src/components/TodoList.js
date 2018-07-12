import React,{ Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
  render() {
    const todoList = this.props.store.getState().map((elem,index) => {
      return (
      <Todo 
      key={index} 
      elem={elem.text} 
      index={index} 
      store={this.props.store} 
      complete={elem.complete}/>
      )
    });
    return(
      <div>
        {todoList}
      </div>
    );
  }
}
export default TodoList;