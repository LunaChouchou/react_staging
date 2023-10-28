import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function Detail() {
    //useSearchParams取值
    const [search,setSearch] = useSearchParams()
    const id = search.get('id')
    const title = search.get('title')
    const content = search.get('content')
    //useLocation取值
    const x = useLocation()
    console.log('@',x)
    return (
        <ul>
        <li>
            <button onClick={()=>{setSearch('id=008&title=哈哈&content=嘻嘻')}}>点我更新一下收到的search参数</button>
        </li>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}
