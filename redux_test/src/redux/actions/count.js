import {INCREMENT,DECREMENT} from '../../redux/constant'
// import store from './store'

//同步action为cation值为object 的一般对象
export const increment=  (data)=>{
    return {type:INCREMENT,data}
}
export const decrement=  (data)=>{
    return {type:DECREMENT,data}
}
//异步action指action值为函数
export const incrementAsync=  (data,time)=>{
    console.log(time);
    
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(increment(data)) 
        }, time);
    }
}
