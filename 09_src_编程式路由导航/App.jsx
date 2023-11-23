import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

export default function App() {
    const element = useRoutes(routes)
    return (
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* <a className="list-group-item" href="./about.html">About</a>
                        <a className="list-group-item active" href="./home.html">Home</a> */}
                        {/* 路由链接 */}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" end to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
