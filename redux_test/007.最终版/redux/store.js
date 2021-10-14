//yinrucreateStore,专门创建redux'的store
import {createStore,applyMiddleware} from 'redux'
//引入为count服务的reducer

import {composeWithDevTools} from 'redux-devtools-extension'
// 用于支持异步action'
import thunk from 'redux-thunk'
//汇总reducers
import reducer from './reducers'
// const store = createStore(allReducers,applyMiddleware(thunk))
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
export default store//暴露store