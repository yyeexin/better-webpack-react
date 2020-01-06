// import React from 'react'
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

export default User
