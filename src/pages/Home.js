import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
const Home = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			Home Page {count} <button onClick={() => setCount(count + 1)}>+1</button>
		</div>
	)
}

export default hot(Home)
