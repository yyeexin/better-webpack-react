import React, { useState } from 'react'
import styled from 'styled-components'
import { hot } from 'react-hot-loader/root'
import {
	HomeOutlined,
	SettingFilled,
	SmileOutlined,
	SyncOutlined,
	LoadingOutlined,
	SmileTwoTone,
	HeartTwoTone,
	CheckCircleTwoTone
} from '@ant-design/icons'
import style_css from './test.css'
import style_less from './test.less'

const Button = styled.a`
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: white;
	border: 2px solid pink;
	text-align: center;
	${props =>
		props.primary &&
		`
		background: white;
		color: palevioletred;
	`}
`
const TestP = styled.p`
	font-size: 50px;
	color: yellow;
`

const Home = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<p class={style_css.title}>test css</p>
			<p class={style_less.title}>test less</p>
			<TestP>test styled</TestP>
			Home Page {count} <button onClick={() => setCount(count + 1)}>+1</button>
			<Button
				href='https://github.com/styled-components/styled-components'
				target='_blank'
				rel='noopener'
				primary>
				GitHub
			</Button>
			<br />
			{/* <video
				controls='controls'
				style={{ height: 300 }}
				src={require('../../assets/media/test-video.mp4')}></video> */}
			<br />
			<HomeOutlined />
			<SettingFilled />
			<SmileOutlined />
			<SyncOutlined spin />
			<SmileOutlined rotate={180} />
			<LoadingOutlined />
			<SmileTwoTone />
			<HeartTwoTone twoToneColor='#eb2f96' />
			<CheckCircleTwoTone twoToneColor='#52c41a' />
		</div>
	)
}

export default hot(Home)
