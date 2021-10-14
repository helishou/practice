//
import {INCREMENT,DECREMENT} from '../constant'
const initState=0
export default function countReducer(preState=initState, action) {
  const { type, data } = action;
  // action对象中获取type ,data
  //根据type 决定如何加工数据
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
