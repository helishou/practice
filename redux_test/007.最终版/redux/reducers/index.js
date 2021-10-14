//用于汇总所有reduce
import {combineReducers} from 'redux'
import count from './count'
import person from './person'

export default combineReducers({
    count,
    person,
})