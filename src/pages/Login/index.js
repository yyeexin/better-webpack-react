import React from 'react'
import { connect } from 'dva'
import styled from 'styled-components'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import login_bg from 'assets/image/login_bg.jpg'
import login_logo from 'assets/image/logo.jpg'

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: url('${login_bg}') no-repeat center / 100% 100%;
`

const FormContent = styled.div`
	width: 320px;
	height: 320px;
	padding: 36px;
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
	background: #fff;
	border-radius: 5px;
`

const Login = props => {
	const onFinish = ({ account, password }) => {
		props.dispatch({
			type: 'app/login',
			payload: {
				account,
				password
			}
		})
		// .then(res => {
		// 	if (res) props.history.push('/')
		// })
	}

	return (
		<StyledDiv>
			<FormContent>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: 10,
						fontSize: 16
					}}>
					<img src={login_logo} style={{ width: 40, marginRight: 8 }} />
					<span>古茗电商</span>
				</div>
				<Form initialValues={{ remember: true }} onFinish={onFinish}>
					<Form.Item name='account' rules={[{ required: true, message: '请输入用户名!' }]}>
						<Input prefix={<UserOutlined />} placeholder='用户名' />
					</Form.Item>
					<Form.Item name='password' rules={[{ required: true, message: '请输入密码!' }]}>
						<Input prefix={<LockOutlined />} type='password' placeholder='密码' />
					</Form.Item>
					<Form.Item>
						<Form.Item name='remember' valuePropName='checked' noStyle>
							<Checkbox>记住账号</Checkbox>
						</Form.Item>
						<a href='' style={{ float: 'right' }}>
							忘记密码
						</a>
					</Form.Item>
					<Form.Item>
						<Button type='primary' htmlType='submit' block>
							登录
						</Button>
					</Form.Item>
				</Form>
			</FormContent>
		</StyledDiv>
	)
}

export default connect(({ dispatch, app }) => ({ dispatch, app }))(Login)
