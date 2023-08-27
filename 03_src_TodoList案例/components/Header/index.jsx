import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodos:PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        //取得按键和输入值
        const {keyCode,target} = event
        if (keyCode !== 13) return
        if(target.value.trim() === ''){
			alert('输入不能为空')
			return
		}
        //制作一个新todo
        const todo = {id:nanoid(),name:target.value,done:false}
        //传给App
        this.props.addTodos(todo)
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
