import CountUI from '../../components/count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
import {connect} from 'react-redux'

//返回的是一个对象
// 返回对象中的key 就作为传递给 ui组件props 的key,value就作为传递给ui组件
//传递状态
// ..返回的是一个对象
//返回对象的key作为传给ui的key,返回的是操作方法


//创建并暴露一个Count的容器组件
export default connect(state=>({count:state}),{jia:createIncrementAction,
jian:createDecrementAction,yibujia:createIncrementAsyncAction})(CountUI)
