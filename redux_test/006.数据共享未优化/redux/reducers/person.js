import {ADD_PERSON} from '../constant'
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState=initState,action) {
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            // preState.unshift(data)//次数不可这样写,这样导致preState被改写了,personreducer识别不了状态的改变
            // reducer必须纯函数
            return [...preState,data]
            // return  preState
    
        default:
            return preState
    }
}
