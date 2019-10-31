import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
const App = () => {
	const [count, setCount] = useState(0)
	console.log('这是根组件')
	return (
		<div>
			<i>数量是:{count}</i>
			<br />
			<button onClick={() => setCount(count + 1)}>+1</button>
		</div>
	)
}

export default hot(App)
