import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import $ from 'jquery'
const Home = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			Home 222 Page {count} <button onClick={() => setCount(count + 1)}>+1</button>
			<video controls='controls' src={require('../assets/media/test-video.mp4')}></video>
		</div>
	)
}

export default hot(Home)
