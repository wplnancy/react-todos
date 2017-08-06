import React, {Component} from 'react'

import {connect} from 'react-redux'
import * as types from '../store/action-typs'

class List extends Component {
    handleClick({id}) {
        this.props.delTodo(id);
    }

    handleChange({id}) {
        this.props.toggleTodo(id);
        console.log(this.props.todos);
    }

    render() {
        return (
            <div>
                <ul className="list-group">

                    {
                        this.props.todos.length ? <li className="list-group-item">
                            <input type="checkbox" onChange={item => {
                                this.props.toggleAll(item.target.checked)
                            }}
                                   checked={this.props.activeCount === 0}/> {this.props.activeCount === 0 ? '全部取消' : '全部选中'}
                        </li> : null
                    }
                    {
                        this.props.todos.map((item, index) => (
                            <li className="list-group-item" key={ index }>
                                <input type="checkbox" onChange={this.handleChange.bind(this, item)}
                                       checked={item.completed}/>
                                <span style={{
                                    marginRight: 5,
                                    textDecoration: item.completed ? 'line-through' : ''
                                }}>{ item.title }</span>
                                <span className="pull-right">
                                    <button className="btn btn-danger btn-xs"
                                            onClick={this.handleClick.bind(this, item)}>X</button>
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    state => ({
        todos: (state.todos).filter(item => {
            switch (item.filter) {
                case 'active':
                    return !item.completed;
                case 'completed':
                    return item.completed;
                default :
                    return true;
            }
        }),
        activeCount: state.todos.filter(item => !item.completed).length
    }),
    dispatch => ({
        delTodo: (id) => dispatch({type: types.DEL_TODO, id: id}),
        toggleTodo: (id) => dispatch({type: types.TOGGE_TODO, id: id}),
        toggleAll: checked => dispatch({type: types.TOGGLE_ALL, checked: checked})
    })
)(List);