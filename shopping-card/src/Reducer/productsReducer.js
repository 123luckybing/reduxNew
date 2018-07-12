import {add} from '../Action/action';
import {product} from '../Store/Product.js';
export default function productsReducer(state = product,action) {
  switch(action.type){
    case 'add':
      return add(action.name,action.price,action.quantity);
    default:
      return state;
  }
}
