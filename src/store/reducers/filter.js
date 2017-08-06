/**
 * Created by wupengli on 2017/8/2.
 */
import {CHANGE_FILTER} from '../action-typs'
/**
 *
 * all 前部
 * active 激活状态的
 * completed 已完成的状态
 */
export  default  function(state = 'all', action={}) {
    switch (action.type) {
        case CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }

}