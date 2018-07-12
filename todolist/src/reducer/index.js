// 引入state
import { todoList } from '../state/index';

function reduce (state = todoList, action) {
  switch (action.type){
    case 'add':
     return [...state, {
       text: action.text,
       complete: action.complete
      }]
      // 数组里面套对象(text,complete,index)，map循环时候elem.text，把input里面的文字作为代办事项加进去
      // text 表示文字，complete表示是否完成，index表示序号
     break;
    case 'toggle':
    // 当点击每一项的时候（传index），重新遍历事项数组，把index的那一项改变，其他不变
      return state.map((elem,index) =>
       (index === action.index)
        ? {            
         text: action.text,
         complete: !action.complete
         // 当点击的时候，加删除线
        } 
        : elem
      )                        
      break;
    case 'completed':
      const storeCom = state.slice();
      return storeCom.filter((elem) => {
        return elem.complete;
      });
      console.log(state);
    // filter接受数组，把每一个对象传进去，对象.complete为true时返回显示
    case 'all':
     const storeTotal = state.slice();
     return storeTotal;
    case 'unComplete':
      const unComplete = state.slice();
      return unComplete.filter((elem) => {
        return !elem.complete;
      });
    default:
     return state;
  }
}
export default reduce;
