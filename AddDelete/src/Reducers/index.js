import { todoList } from '../State/initState';
// state数据引入过去
import {add,del} from '../Action/index';
// action中的方法引过去
function todo (state = todoList, action) {
  switch(action.type){
    case 'add':
      return add(state,action.value);
      // 调用add 方法
    case 'delete':
      return del(state,action.index);
    default:
      return state;
  }

}
export default todo;