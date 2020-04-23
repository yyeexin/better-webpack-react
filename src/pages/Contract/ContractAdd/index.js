import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { useRequest } from '@umijs/hooks'
import { connect } from 'dva'
import { Card, Row, Col, Form, Input, Button, Modal, Table, Tag, InputNumber } from 'antd'

const modelName = 'contractAdd'

const ContractAdd = props => {
	const [form] = Form.useForm()
	const { dispatch, contractAdd } = props
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [selectedTemplate, setSelectedTemplate] = useState({})
	const [templateModalVisible, setTemplateModalVisible] = useState(false)

	useEffect(() => {
		// dispatch({ type: 'app/getContractType' })
		// dispatch({ type: 'app/getContractStatus' })
		// dispatch({ type: 'app/getContractDictionary' })
	}, [])

	const getTableData = async (current, pageSize) => {
		const { result, pagination } = await dispatch({
			type: `${modelName}/getContractTemplate`,
			payload: {
				page: current,
				pageSize
			}
		})
		const { total = 0 } = pagination
		return {
			list: result,
			total
		}
	}

	const { tableProps, refresh } = useRequest(({ current, pageSize }) => getTableData(current, pageSize), {
		paginated: true,
		defaultPageSize: 5
	})

	const onFinish = values => {
		console.log('Success:', values)
		const { template, shopName, shopCode } = values
		const { contractTemplateId } = template
		props.dispatch({
			type: `${modelName}/updateState`,
			payload: {
				addContractFormValues: values
			}
		})
		props.history.push(`/contract/add/${contractTemplateId}?shopName=${shopName}&shopCode=${shopCode}`)
	}

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo)
	}

	return (
		<>
			<Card>
				<Row justify='center'>
					<Col xs={24} sm={20} md={16} lg={12} xl={8} xxl={6}>
						<Form
							form={form}
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 16 }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							initialValues={contractAdd.addContractFormValues}>
							<Form.Item
								name='template'
								label='合同模板'
								rules={[
									{
										required: true,
										message: '请选择合同模板'
									}
								]}>
								<section
									onClick={() => {
										setSelectedRowKeys(() => {
											const { id } = contractAdd.activeTemplate
											return id ? [id] : []
										})
										setSelectedTemplate(() => contractAdd.activeTemplate)
										setTemplateModalVisible(true)
									}}>
									{contractAdd.activeTemplate.id ? (
										<Tag color='#108ee9'>{contractAdd.activeTemplate.contractTemplateName}</Tag>
									) : (
										<Button>选择模板</Button>
									)}
								</section>
							</Form.Item>
							<Form.Item
								name='shopName'
								label='签约主体'
								rules={[
									{
										required: true,
										message: '请输入主体名称'
									}
								]}>
								<Input allowClear style={{ width: '100%' }} placeholder='请输入签约主体' />
							</Form.Item>
							<Form.Item
								noStyle
								shouldUpdate={(prevValues, currentValues) =>
									(prevValues.template || {}).contractTypeId !== currentValues.template.contractTypeId
								}>
								{({ getFieldValue }) => {
									const template = getFieldValue('template') || {}
									const { contractTypeId } = template
									return contractTypeId && (contractTypeId === 8 || contractTypeId === 9) ? (
										<Form.Item
											name='shopCode'
											label='主体编号'
											validateTrigger='onBlur'
											rules={[
												{
													required: true,
													message: '请输入主体编码'
												},
												{
													message: '请输入正确的主体编码（手机号）',
													pattern: /^1[345789][0-9]{9}$/
												}
											]}>
											<InputNumber style={{ width: '100%' }} placeholder='请输入主体编码' />
										</Form.Item>
									) : (
										<Form.Item
											name='shopCode'
											label='主体编号'
											rules={[
												{
													required: true,
													message: '请输入主体编码'
												}
											]}>
											<Input allowClear style={{ width: '100%' }} placeholder='请输入主体编码' />
										</Form.Item>
									)
								}}
							</Form.Item>
							<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
								<Button type='primary' htmlType='submit'>
									下一步
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</Card>
			{templateModalVisible && (
				<Modal
					width={700}
					title='合同模板'
					visible={templateModalVisible}
					onOk={() => {
						dispatch({
							type: `${modelName}/updateState`,
							payload: {
								activeTemplate: selectedTemplate
							}
						})
						form.setFieldsValue({ template: selectedTemplate })
						setSelectedRowKeys([])
						setSelectedTemplate({})
						setTemplateModalVisible(false)
					}}
					onCancel={() => {
						setSelectedRowKeys([])
						setSelectedTemplate({})
						setTemplateModalVisible(false)
					}}>
					<Table
						{...tableProps}
						rowKey='id'
						rowSelection={{
							type: 'radio',
							selectedRowKeys,
							onChange: selectedRowKeys => setSelectedRowKeys(selectedRowKeys),
							onSelect: record => setSelectedTemplate(record)
						}}
						columns={[
							{
								title: '模板名称',
								dataIndex: 'contractTemplateName',
								key: 'contractTemplateName'
							},
							{
								title: '模板类型',
								dataIndex: 'contractTypeName',
								key: 'contractTypeName'
							},
							{
								title: '更新时间',
								dataIndex: 'updateTime',
								key: 'updateTime',
								render(text, record, index) {
									return record.updateTime
										? record.updateTime.split(' ')[0]
										: record.createTime
										? record.createTime.split(' ')[0]
										: ''
								}
							}
						]}
					/>
				</Modal>
			)}
		</>
	)
}

export default connect(({ dispatch, app, contractAdd }) => ({ dispatch, app, contractAdd }))(hot(ContractAdd))
