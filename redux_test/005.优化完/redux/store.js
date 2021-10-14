//yinrucreateStore,专门创建redux'的store
import {createStore,applyMiddleware} from 'redux'
import countReducer from './count_reducer'
// 用于支持异步action'
import thunk from 'redux-thunk'
const store = createStore(countReducer,applyMiddleware(thunk))
export default store//暴露store