import React, {Component} from 'react'

import {connect} from 'react-redux'
import  * as types from  '../store/action-typs'

/**
 * 1. 添加项目到store
 */

class Header extends Component {
    handleKeyDown(event) {
        if (event.keyCode === 13 && event.target.value) {
            let title = event.target.value;
            this.props.addTodo(title);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <input type="text" className="form-control" onKeyDown={this.handleKeyDown.bind(this)}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        addTodo: (title) => dispatch({type: types.ADD_TODO, title: title})
    })
)(Header)


