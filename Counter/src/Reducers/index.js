function reduce(state = 0, action) {
  if(action.type === 'increment') {
    return state + 1
  } else if(action.type === 'decrement') {
    return state - 1
  } else if(action.type === 'evenAdd') {
    if(state %2 === 1) {
      return state
    }  else {
      return state +1
    }
   } else {
    return state
    }
  }
export default reduce;