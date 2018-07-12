import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.ProductAdd = this.ProductAdd.bind(this);
  }
  ProductAdd() {
    this.props.store.dispatch({
      type:'add',
      name:this.refs.name.value,
      price:this.refs.price.value,
      quantity: this.refs.quantity.value
    });
    this.refs.name.value = '';
    this.refs.price.value= '';
    this.refs.quantity.value= '';
  }
  render() {
    const productList = this.props.store.getState().productsReducer;
    return (
      <div className="App">
        <h3>商品列表</h3>
        添加商品名称：<input type="text" ref='name'/><br/>
        添加商品价格：<input type="text" ref='price'/><br/>
        添加商品数量：<input type="text" ref='quantity'/><br/>
        <button onClick={this.ProductAdd}>添加</button><br/>
        <div className='product-title'>
          <span className='product-list'>商品名称</span>
           <span className='product-list'>商品价格</span>
           <span className='product-list'>商品数量</span>
           <span className='product-list'>购物车</span>
           <span className='product-list'>删除</span>
        </div>
          {
            productList.map( (elem,index) => { 
             return (
                 <div className='product-title' key={index}>
                  <span className='product-list'>{elem.product}</span>
                  <span className='product-list'>{elem.quantity}</span>
                  <span className='product-list'>{elem.unitCost}</span>
                  <button className='product-list'>添加至我的购物车</button>
                  <button className='product-list'>删除</button>
                </div>
             )
           })
       }
      </div>
    );
  }
}

export default App;
