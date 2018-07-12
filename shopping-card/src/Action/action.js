import { product } from '../Store/Product.js';
function add(name,quantity,price) {
  return product.concat({product:name,quantity:quantity,unitCost:price})
}
export  {add};