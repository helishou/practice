//yinrucreateStore,专门创建redux'的store
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为count服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import {composeWithDevTools} from 'redux-devtools-extension'
// 用于支持异步action'
import thunk from 'redux-thunk'
//汇总reducers
const allReducers = combineReducers({
    he:countReducer,
    ren:personReducer,
})
// const store = createStore(allReducers,applyMiddleware(thunk))
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))
export default store//暴露store