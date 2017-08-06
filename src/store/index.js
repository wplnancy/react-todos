import {createStore, combineReducers} from 'redux'

// 合并reducer 需要进行传递参数

import { filter, todos } from './reducers'
console.log(filter);

let reducer = combineReducers({
    todos,
    filter
});

let store = createStore(reducer);
export  default  store;
