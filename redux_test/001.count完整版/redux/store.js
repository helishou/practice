//yinrucreateStore,专门创建redux'的store
import {createStore} from 'redux'
import countReducer from './count_reducer'
const store = createStore(countReducer)
export default store//暴露store