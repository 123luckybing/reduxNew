import React,{ Component } from 'react';
class Footer extends Component {
  constructor() {
    super();
    this.completed = this.completed.bind(this);
    this.all = this.all.bind(this);
    this.unComplete = this.unComplete.bind(this);
  }
  unComplete() {
    this.props.store.dispatch({
      type:'unComplete'
    });
    console.log(this.props.store.getState());
  }
  all() {
    this.props.store.dispatch({
      type:'all'
    });
    console.log(this.props.store.getState());
  }
  completed() {
    this.props.store.dispatch({
      type: 'completed'
    });
    console.log(this.props.store.getState());
  }
  render() {
    return(
      <div>
        <button onClick={this.unComplete}>显示待办事项</button><br/>
        <button onClick={this.completed}>显示已完成</button><br/>
        <button onClick={this.all}>显示全部</button>
      </div>
    )
  }
}
export default Footer;