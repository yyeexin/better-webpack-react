import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { connect } from 'dva'
import { Descriptions, Card, Divider, Row, Col, Form, Input, Button, Modal, Table, Tag, InputNumber } from 'antd'
const modelName = 'contractAdd'
import getUrlQuerys from 'utils/getUrlQuerys'
const FillContract = props => {
	const { shopName, shopCode } = getUrlQuerys()
	const [form] = Form.useForm()
	const { dispatch } = props
	const { templateId } = props.match.params
	useEffect(() => {
		dispatch({ type: `app/getContractDictionary` })
		dispatch({
			type: `${modelName}/queryContractDetailForm`,
			payload: {
				templateId
			}
		})
	}, [])

	const formItemLayout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 }
	}

	return (
		<Card>
			<Form from={form}>
				<Row>
					<Col xs={24} md={12}>
						<Form.Item {...formItemLayout} label='签约主体'>
							{shopName}
						</Form.Item>
					</Col>
					<Col xs={24} md={12}>
						<Form.Item {...formItemLayout} label='主体编码'>
							{shopCode}
						</Form.Item>
					</Col>
					<Col xs={24} md={12}>
						<Form.Item
							{...formItemLayout}
							name='contractCode'
							label='合同编码'
							rules={[
								{
									required: true,
									message: '请输入合同编码'
								}
							]}>
							<Input style={{ width: 200 }} placeholder='请输入合同编码' />
						</Form.Item>
					</Col>
					<Col xs={24} md={12}>
						<Form.Item
							{...formItemLayout}
							name='carbonCopyTo'
							label='抄送人'
							rules={[
								{
									message: '请输入正确的手机号',
									pattern: /^1[345789][0-9]{9}$/
								}
							]}>
							<InputNumber style={{ width: 200 }} placeholder='请输入抄送人' />
						</Form.Item>
					</Col>
				</Row>
			</Form>
			<Divider />
			<Row justify='center'>
				<Col xs={24} sm={20} md={16} lg={12} xl={8} xxl={6}></Col>
			</Row>
		</Card>
	)
}

export default connect(({ dispatch, app, contractAdd }) => ({ dispatch, app, contractAdd }))(hot(FillContract))
