import React, { useState, useEffect } from 'react'
import { Form, Button, Modal, Input, Select, Popconfirm, Table, Row, Col } from 'antd'
import { useFormTable } from '@umijs/hooks'
import { connect } from 'dva'
import urls from 'utils/urls'
import request from 'utils/request'
const { BaoHuo_Shop_URLS } = urls
const { shopsLists } = BaoHuo_Shop_URLS

const { Option } = Select

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 }
}

const SelectShops = props => {
	const [form] = Form.useForm()
	const { dispatch, app } = props
	const { wareHouses, wareHouseTagLines = [], ShopStatusSelect } = app

	//选择弹窗显隐
	const [selectShopModalVisible, setSelectShopModalVisible] = useState(false)
	//页面中选中的Key
	const [pageSelectedShopsKeys, setPageSelectedShopsKeys] = useState([])
	//弹窗中选中的key
	const [modalSelectedRowKeys, setModalSelectedRowKeys] = useState(
		props.defaultValue && props.defaultValue.length ? props.defaultValue.map(item => item.id) : []
	)
	//弹窗中选中的row
	const [modalSelectedShops, setModalSelectedShops] = useState(
		props.defaultValue && props.defaultValue.length ? props.defaultValue : []
	)

	useEffect(() => {
		dispatch({ type: 'app/getWareHouses' })
		dispatch({ type: 'app/getShopStatusSelect' })
	}, [])

	const emitData = () => {
		props.onChange(modalSelectedShops)
	}
	useEffect(() => {
		emitData()
	}, [modalSelectedShops])

	const getTableData = async ({ current, pageSize }, formData) => {
		const { pagination, result } = await request({
			method: 'post',
			url: shopsLists,
			payload: {
				page: current,
				pageSize,
				...formData
			}
		})

		return {
			...pagination,
			list: result
		}
	}

	const { tableProps, search, loading } = useFormTable(getTableData, {
		defaultPageSize: 10,
		form: form
		// cacheKey: 'shopModalTable'
	})

	const { submit, reset } = search || {}

	const dialogColumns = [
		{
			title: '店铺编码',
			dataIndex: 'code'
		},
		{
			title: '店铺名称',
			dataIndex: 'name'
		},
		{
			title: '店铺状态',
			key: 'status',
			render: row => {
				return row.status ? row.status.name : ''
			}
		}
	]

	const columns = dialogColumns.concat([
		{
			title: '操作',
			key: 'operate',
			render: (text, record, index) => {
				return (
					<Button
						type='primary'
						size='small'
						onClick={e => {
							Modal.confirm({
								title: '确定删除么?',
								onOk() {
									deletePageSelectd([record.id])
								}
							})
						}}>
						删除
					</Button>
				)
			}
		}
	])

	function deletePageSelectd(keys = []) {
		setPageSelectedShopsKeys([])
		keys.forEach(key => {
			setModalSelectedShops(modalSelectedShops => modalSelectedShops.filter(item => item.id !== key))
			setModalSelectedRowKeys(modalSelectedRowKeys => modalSelectedRowKeys.filter(item => item !== key))
		})
	}

	const searchFrom = (
		<Form form={form}>
			<Row>
				<Col span={8}>
					<Form.Item {...layout} name='status' label='店铺状态'>
						<Select allowClear placeholder='请选择店铺状态' onChange={submit}>
							{ShopStatusSelect.map(item => (
								<Option key={item.id}>{item.name}</Option>
							))}
						</Select>
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item {...layout} name='wareHouseId' label='仓库'>
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
								}
							}}>
							{wareHouses.map(item => (
								<Option key={item.id}>{item.name}</Option>
							))}
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				{/* <Col span={8}>
					<Form.Item noStyle dependencies={['wareHouseId']}>
						{({ getFieldValue }) => (
							<Form.Item {...layout} name='lineId' label='路线'>
								<Select allowClear placeholder='请选择路线' onChange={submit}>
									{(wareHouseTagLines[getFieldValue('wareHouseId')] || []).map(item => (
										<Option key={item.id}>{item.name}</Option>
									))}
								</Select>
							</Form.Item>
						)}
					</Form.Item>
				</Col> */}
				<Col span={8}>
					<Form.Item {...layout} name='search' label='搜索'>
						<Input placeholder='请输入店铺名称/编码' />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={8}>
					<Form.Item {...layout} label=' ' colon={false}>
						<Button type='primary' onClick={submit}>
							搜索
						</Button>
						<Button onClick={reset} style={{ marginLeft: 20 }}>
							重置
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)

	const rowSelection = {
		selectedRowKeys: modalSelectedRowKeys,
		onChange: (selectedRowKeys, selectedRows) => {
			setModalSelectedRowKeys(selectedRowKeys)
			const modalSelectedShopsKeys = modalSelectedShops.map(item => item.id)
			let newarr = selectedRows.filter(item => !modalSelectedShopsKeys.includes(item.id))
			setModalSelectedShops(modalSelectedShops =>
				modalSelectedShops.concat(newarr).filter(item => selectedRowKeys.includes(item.id))
			)
		}
	}

	return (
		<div>
			<div style={{ display: 'flex', aliginItems: 'center', marginBottom: '10px' }}>
				{pageSelectedShopsKeys.length > 0 && (
					<span>
						{`已选择 ${pageSelectedShopsKeys.length} 条数据 `}
						<Popconfirm
							title={'确定要删除选择的数据?'}
							placement='left'
							onConfirm={() => deletePageSelectd(pageSelectedShopsKeys)}>
							<Button type='primary' size='small' style={{ marginLeft: 8 }}>
								删除？
							</Button>
						</Popconfirm>
					</span>
				)}
				<Button type='primary' style={{ marginLeft: 'auto' }} onClick={() => setSelectShopModalVisible(true)}>
					选择门店
				</Button>
			</div>
			<Table
				bordered
				columns={columns}
				size='small'
				rowSelection={{
					selectedRowKeys: pageSelectedShopsKeys,
					onChange: (selectedRowKeys, selectedRows) => {
						setPageSelectedShopsKeys(selectedRowKeys)
					}
				}}
				simple
				dataSource={modalSelectedShops}
				rowKey='id'
			/>
			<Modal
				title='选择门店'
				width='1000px'
				visible={selectShopModalVisible}
				onCancel={() => setSelectShopModalVisible(false)}
				onOk={() => setSelectShopModalVisible(false)}>
				{searchFrom}
				<Table
					bordered
					columns={dialogColumns}
					size='small'
					rowSelection={rowSelection}
					simple
					rowKey='id'
					loading={loading}
					{...tableProps}
				/>
			</Modal>
		</div>
	)
}

export default connect(({ dispatch, app }) => ({ dispatch, app }))(SelectShops)
