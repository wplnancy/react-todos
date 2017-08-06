import React, {Component} from 'react'

import {connect} from 'react-redux';
import  * as types from  '../store/action-typs'

class Footer extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-sm-4" style={{lineHeight: '34px'}}>
                    {
                        this.props.activeCount ? <span>你还有{ this.props.activeCount }代办事项：</span> : null
                    }

                </div>
                <div className="col-sm-5">
                    <button className={"btn " + (this.props.filter === 'all' ? "btn-success" : "btn-default")}
                            onClick={this.props.changeFilter.bind(this, "all")}>
                        全部
                    </button>
                    <button className={"btn " + (this.props.filter === 'active' ? "btn-success" : "btn-default")}
                            onClick={this.props.changeFilter.bind(this, "active")}
                            style={{marginLeft: 5}}>
                        未完成
                    </button>
                    <button className={"btn " + (this.props.filter === 'completed' ? "btn-success" : "btn-default")}
                            onClick={this.props.changeFilter.bind(this, "completed")}
                            style={{marginLeft: 5}}>
                        已完成
                    </button>
                </div>
                <div className="col-sm-3">
                    {
                        this.props.completedCount ?
                            <button className="btn btn-danger" onClick={this.props.deleteAllCompleted.bind(this)}>
                                清除已完成</button> : null
                    }

                </div>
            </div>
        )
    }
}
export default connect(
    state => ({
        activeCount: (state.todos.filter((item) => !item.completed)).length,
        completedCount: (state.todos.filter(item => item.completed)).length,
        filter: state.filter

    }),
    {
        deleteAllCompleted: () => ({type: types.DELETE_ALL_COMPLETED}),
        changeFilter: (filter) => ({type: types.CHANGE_FILTER, filter})
}
)
(Footer);