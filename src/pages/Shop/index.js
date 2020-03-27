import React, { useEffect } from 'react'
import { connect } from 'dva'
import { Form, Input, Button, Checkbox, Row, Col, Table, Select, Card, Tag } from 'antd'
import { EyeOutlined, DeleteOutlined, EditOutlined, CopyOutlined } from '@ant-design/icons'
import { hot } from 'react-hot-loader/root'
import { useFormTable } from '@umijs/hooks'
const { Option } = Select
import { StyledFormItem } from './styled-components'

const Shop = props => {
	const { dispatch } = props
	useEffect(() => {
		dispatch({ type: `app/getShopBrandSelects` })
		dispatch({ type: `app/getShopTypeSelects` })
		dispatch({ type: 'app/getWareHouses' })
	}, [])

	const getTableData = async ({ current, pageSize }, formData) => {
		const data = await dispatch({
			type: `shop/query`,
			payload: {
				page: current,
				pageSize: pageSize,
				...formData
			}
		})
		return data
	}

	const [form] = Form.useForm()
	const { tableProps, search, loading } = useFormTable(getTableData, {
		defaultPageSize: 10,
		form: form
	})

	const { type, changeType, submit, reset } = search

	const columns = [
		{
			title: '名称',
			dataIndex: 'name',
			align: 'center',
			fixed: true,
			width: 200
		},
		{
			title: '编码',
			dataIndex: 'code',
			align: 'center',
			width: 100
		},
		{
			title: '品牌',
			dataIndex: 'brand',
			align: 'center',
			width: 100
		},
		{
			title: '管理账号',
			dataIndex: 'account',
			align: 'center',
			width: 150
		},
		{
			title: '地址',
			key: 'address',
			align: 'center',
			width: 300,
			render(text, record, index) {
				return `${record.province}${record.city}${record.district}${record.address}`
			}
		},
		{
			title: '联系人',
			dataIndex: 'contact',
			align: 'center',
			width: 100
		},
		{
			title: '联系电话',
			dataIndex: 'phone',
			align: 'center',
			width: 150
		},
		{
			title: '店铺状态',
			dataIndex: ['status', 'name'],
			align: 'center',
			width: 100
		},
		{
			title: '启用状态',
			dataIndex: 'enabled',
			align: 'center',
			width: 100,
			render(text, record, index) {
				return text ? '启用' : '停用'
			}
		},
		{
			title: '仓库',
			dataIndex: 'wareHouseList',
			align: 'center',
			width: 100,
			render(text, record, index) {
				return (text || []).map(item => (
					<Tag key={item.id} color='#f50'>
						{item.name}
					</Tag>
				))
			}
		},
		{
			title: '签约时间',
			dataIndex: 'joinedTime',
			align: 'center',
			width: 150
		},
		{
			title: '操作',
			key: 'operation',
			align: 'center',
			fixed: 'right',
			width: 100,
			render(text, record, index) {
				return (
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<EyeOutlined style={{ color: '#108ee9' }} />
						<DeleteOutlined style={{ color: 'red' }} />
						<EditOutlined style={{ color: 'green' }} />
					</div>
				)
			}
		}
	]

	const onFinish = values => {
		console.log('Success:', values)
	}

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo)
	}

	const { app } = props
	const { ShopBrandSelect, ShopTypeSelect, wareHouses, wareHouseTagLines } = app

	return (
		<Card>
			<Form form={form} initialValues={{}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
				<Row gutter={24}>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='brandId'>
							<Select allowClear placeholder='请选择店铺品牌' onChange={submit}>
								{ShopBrandSelect.map(item => (
									<Option key={item.id}>{item.name}</Option>
								))}
							</Select>
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='typeId'>
							<Select allowClear placeholder='请选择店铺类型' onChange={submit}>
								{ShopTypeSelect.map(item => (
									<Option key={item.id}>{item.name}</Option>
								))}
							</Select>
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='wareHouseId'>
							<Select
								allowClear
								placeholder='请选择仓库'
								onChange={value => {
									form.setFieldsValue({ lineId: undefined })
									submit()
									if (value) {
										dispatch({
											type: `app/getSingleWareHouseTagLines`,
											payload: {
												wareHouseIdList: [value]
											}
										})
									} else {
										dispatch({
											type: `app/updateState`,
											payload: {
												wareHouseTagLines: []
											}
										})
									}
								}}>
								{wareHouses.map(item => (
									<Option key={item.id}>{item.name}</Option>
								))}
							</Select>
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='lineId'>
							<Select allowClear placeholder='请选择路线' onChange={submit}>
								{wareHouseTagLines.map(item => (
									<Option key={item.id}>{item.name}</Option>
								))}
							</Select>
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='password'>
							<Input style={{ width: '100%' }} />
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='password'>
							<Input style={{ width: '100%' }} />
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='password'>
							<Input style={{ width: '100%' }} />
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='password'>
							<Input style={{ width: '100%' }} />
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='password'>
							<Input style={{ width: '100%' }} />
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='password'>
							<Input style={{ width: '100%' }} />
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem name='password'>
							<Input style={{ width: '100%' }} />
						</StyledFormItem>
					</Col>
					<Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
						<StyledFormItem>
							<Button type='primary' htmlType='submit'>
								Submit
							</Button>
						</StyledFormItem>
					</Col>
				</Row>
			</Form>
			<Table {...tableProps} bordered columns={columns} loading={loading} rowKey='id' scroll={{ x: true }} />
		</Card>
	)
}

export default connect(({ dispatch, app, shop }) => ({ dispatch, app, shop }))(hot(Shop))
