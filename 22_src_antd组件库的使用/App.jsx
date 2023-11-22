import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import { WechatOutlined } from '@ant-design/icons'
const { RangePicker } = DatePicker

export default class App extends Component {
  render() {
    return (
      <div>App
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <WechatOutlined />
        <RangePicker />
        <RangePicker showTime />
        <RangePicker picker="week" />
        <RangePicker picker="month" />
        <RangePicker picker="quarter" />
        <RangePicker picker="year" />
      </div>
    )
  }
}
