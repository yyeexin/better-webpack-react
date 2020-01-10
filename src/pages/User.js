import React, { useState, useEffect, useReducer } from 'react'
import styled from 'styled-components'
const User = () => {
	// 创建一个 Title 组件,它将渲染一个附加了样式的 <h1> 标签
	const Title = styled.h1`
		font-size: 1.5em;
		text-align: center;
		color: palevioletred;
	`

	// 创建一个 Wrapper 组件,它将渲染一个附加了样式的 <section> 标签
	const Wrapper = styled.section`
		padding: 4em;
		background: papayawhip;
	`

	return (
		<div>
			<Wrapper>
				<Title>Hello World!</Title>
			</Wrapper>
		</div>
	)
}

const Example = () => {
	const [count, setCount] = useState(0)

	function handleAlertClick() {
		setTimeout(() => {
			alert('You clicked on: ' + count)
		}, 3000)
	}

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<button onClick={handleAlertClick}>Show alert</button>
		</div>
	)
}

// function Counter() {
// 	const [count, setCount] = useState(0)

// 	useEffect(() => {
// 		setTimeout(() => {
// 			console.log(`You clicked ${count} times`)
// 		}, 3000)
// 	})

// 	return (
// 		<div>
// 			<p>You clicked {count} times</p>
// 			<button onClick={() => setCount(count + 1)}>Click me</button>
// 		</div>
// 	)
// }

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { count, step } = state

	useEffect(() => {
		const id = setInterval(() => {
			dispatch({ type: 'tick' })
		}, 1000)
		return () => clearInterval(id)
	}, [dispatch])

	return (
		<>
			<h1>{count}</h1>
			<input
				value={step}
				onChange={e => {
					dispatch({
						type: 'step',
						step: Number(e.target.value)
					})
				}}
			/>
		</>
	)
}

const initialState = {
	count: 0,
	step: 1
}

function reducer(state, action) {
	const { count, step } = state
	if (action.type === 'tick') {
		return { count: count + step, step }
	} else if (action.type === 'step') {
		return { count, step: action.step }
	} else {
		throw new Error()
	}
}

// export default User
// export default Example
export default Counter
