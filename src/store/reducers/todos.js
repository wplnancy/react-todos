/**
 * Created by wupengli on 2017/8/2.
 * 增加， 删除 切换状态的行为
 */


import *  as types from '../action-typs'
export default function (state = [], action = {}) {

    switch (action.type) {
        case types.ADD_TODO:
            return [...state, {id: Date.now(), title: action.title, completed: false}];
        case types.DEL_TODO:
            return state.filter(item => {
                return item.id !== action.id
            });
        case types.TOGGE_TODO:
            return state.map(item => {
                if (item.id == action.id) {
                    item.completed = !item.completed;
                }
                return item;  //一定要有返回值
            });
        case types.DELETE_ALL_COMPLETED:
            return state.filter(item => {
                return !item.completed;
            });
        case types.CHANGE_FILTER:
            state.filter = action.filter;
            return state;
        case types.TOGGLE_ALL:
            return state.map(item => {
                item.completed = action.checked;
                return item;
            });

        default:
            //默认需要返回老的state
            return state;
    }
}

