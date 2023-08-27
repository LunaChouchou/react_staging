import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

    state = {
        users:[], //初始化状态
        isFirst:true, //是否为第一次打开页面
        isLoading:false, //发送请求前true，数据回来了false
        err:'', //存储请求错误信息
    } 

    //更新app的state
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
