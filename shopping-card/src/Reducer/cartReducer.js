const cartProduce = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}
function cartReducer(state = cartProduce,action) {
  switch(action.type){
    case 'add':
      return [...state.cart,action.payload]
    default:
      return state.cart;
  }
}
export default {cartReducer,cartProduce}; 