import React,{ Component } from 'react';
class AddTodo extends Component {
  constructor() {
    super();
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick() {
    if(this.refs.input.value === ''){
      alert('填入数据不能为空');
    } else {
    this.props.store.dispatch({
      type:'add',
      text:this.refs.input.value,
      complete: false
    });
   }
  this.refs.input.value = '';
  }
  render() {
    return(
      <div>
        <input type="text" ref='input'/>
        <button onClick = {this.btnClick}>添加</button>
      </div>
    );
  }
}
export default AddTodo;