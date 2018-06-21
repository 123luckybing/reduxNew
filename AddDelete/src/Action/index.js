// 写一些函数
function add(state,num) { 
  return state.concat([num]);
}

function del(state,index) {
  state.splice(index,1);
  return state;
}
export {add,del};