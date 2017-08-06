import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import List from './List'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    render() {
        return (
            <div className="container" style={{marginTop: '10px'}}>
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <Header/>
                            </div>
                            <div className="panel-body">
                                <List/>
                            </div>
                            <div className="panel-footer">
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
