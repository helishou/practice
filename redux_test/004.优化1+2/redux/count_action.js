import {INCREMENT,DECREMENT} from './constant'
// import store from './store'

//同步action为cation值为object 的一般对象
export const createIncrementAction=  (data)=>{
    return {type:INCREMENT,data}
}
export const createDecrementAction=  (data)=>{
    return {type:DECREMENT,data}
}
//异步action指action值为函数
export const createIncrementAsyncAction=  (data,time)=>{
    console.log(time);
    
    return (dispatch)=>{
        setTimeout(() => {
            console.log(21144)
            dispatch(createIncrementAction(data)) 
        }, time);
    }
}
