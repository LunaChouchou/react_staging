import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
    const element = useRoutes(routes)
    // const element = useRoutes([
    //     {
    //         path: '/about',
    //         element: <About/>
    //     },
    //     {
    //         path: '/home',
    //         element: <Home/>
    //     },
    //     {
    //         path: '/',
    //         element: <Navigate to="/about"/>
    //     }
    // ])
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* <a className="list-group-item" href="./about.html">About</a>
                        <a className="list-group-item active" href="./home.html">Home</a> */}
                        {/* 路由链接 */}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
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
