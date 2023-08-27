import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'

export default class App extends Component {

  //初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:false},
    {id:'002',name:'睡觉',done:false},
    {id:'003',name:'打代码',done:true}
  ]}

  //添加一个todo
  addTodos = (todo) => {
    //获取原todos
    const {todos} = this.state
    //返回新todos
    this.setState({todos:[todo,...todos]})
  }

  //用于更新一个todo对象
  updateTodo = (id,done) => {
    //获取状态中的todos
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => { 
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //删除一个todo
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  //全选
  checkAllTodo = (done) => {
    //获取原来的todos
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }

  //清除所有已完成
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
        <div className="root">
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodos={this.addTodos}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        </div>
    )
  }
}
