import React, { useState } from 'react'
import { Button } from 'antd'
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

const MyButton = styled.a`
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
			Home Page
			{/* <p className={style_css.title}>test css</p>
			<p className={style_less.title}>test less</p>
			<TestP>test styled</TestP>
			Home Page {count} <Button onClick={() => setCount(count + 1)}>+1</Button>
			<MyButton
				href='https://github.com/styled-components/styled-components'
				target='_blank'
				rel='noopener'
				primary>
				GitHub
			</MyButton>
			<br />
			<HomeOutlined />
			<SettingFilled />
			<SmileOutlined />
			<SyncOutlined spin />
			<SmileOutlined rotate={180} />
			<LoadingOutlined />
			<SmileTwoTone />
			<HeartTwoTone twoToneColor='#eb2f96' />
			<CheckCircleTwoTone twoToneColor='#52c41a' /> */}
		</div>
	)
}

export default hot(Home)
