import React, { Component } from 'react';
import './App.css';
import TodoList from './Component/Todolist';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList store={this.props.store}/>
      </div>
    );
  }
}

export default App;
