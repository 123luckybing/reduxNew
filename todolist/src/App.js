import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>概要设计:<br/>
    1.想要显示一个 todo 项的列表。<br/>
    2.一个 todo 项被点击后，会增加一条删除线并标记 completed。<br/>
    3.会显示用户新增一个 todo 字段。<br/>
    4.在 footer 里显示一个可切换的显示全部/只显示 completed 的/只显示 incompleted 的 todos。</div><br/>
        <AddTodo store ={this.props.store}/>
        <TodoList store ={this.props.store}/>
        <Footer store ={this.props.store}/>
      </div>
    );
  }
}

export default App;
