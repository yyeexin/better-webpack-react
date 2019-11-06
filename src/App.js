import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { Button } from 'antd'
import css_style from './App.css'
import less_style from './App.less'
import scss_style from './App.scss'
const App = () => {
	const [count, setCount] = useState(0)
	console.log('这是根组件')
	return (
		<div className={less_style.container}>
			<p className={css_style.text}>css样式测试</p>
			<p className={less_style.text}>less样式测试</p>
			<p className={scss_style.text}>scss样式测试</p>
			<i>数量是:{count}</i>
			<br />
			<Button onClick={() => setCount(count + 1)}>+1</Button>
			<img src={require('./sd.jpg')} />
		</div>
	)
}

export default hot(App)
