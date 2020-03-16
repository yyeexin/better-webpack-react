import React, { useState, useEffect } from 'react'
import { useAntdTable } from '@umijs/hooks'
import { requestAPI } from 'utils/requestAPI'
import { config } from 'utils'
const { BaoHuo_Shop_URLS, BaoHuo_AppCommon_URLS, BaoHuo_Task_URLS } = config
const { getWareHouses, getShopStatusSelect, getSingleWareHouseTagLines } = BaoHuo_AppCommon_URLS
const { shopsLists } = BaoHuo_Shop_URLS
const { findShopListByIdsVo } = BaoHuo_Task_URLS
const { Form, Button, Modal, Input, Select, Popconfirm, Table } = window.ANTD
const { Option } = Select
const { TextArea } = Input
const FormItem = Form.Item

const SelectShops = props => {
	//选择弹窗显隐
	const [selectShopModalVisible, setSelectShopModalVisible] = useState(false)
	//编码导入弹窗显隐
	const [multipleSearchModalVisible, setMultipleSearchModalVisible] = useState(false)
	//店铺状态下拉数据
	const [shopStatusSelect, setShopStatusSelect] = useState([])
	//仓库下拉数据
	const [wareHouse, setWareHouse] = useState([])
	//路线下拉数据
	const [wareHouseTagLines, setWareHouseTagLines] = useState([{ id: '', name: '全部线路' }])
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
		getShopStatus()
		getWareHouse()
	}, [])

	useEffect(() => {
		emitData()
	}, [modalSelectedShops])

	const emitData = () => {
		props.onChange(modalSelectedShops)
	}

	const getShopStatus = async () => {
		const { result = [] } = await requestAPI({
			urlType: {
				type: 'get',
				url: getShopStatusSelect
			}
		})
		result.unshift({ id: '', name: '全部状态' })
		setShopStatusSelect(result)
	}

	const getWareHouse = async () => {
		const { result = [] } = await requestAPI({
			urlType: {
				type: 'get',
				url: getWareHouses
			}
		})
		result.unshift({ id: '', name: '全部仓库' })
		setWareHouse(result)
	}

	const getWareHouseTagLines = async wareHouseId => {
		props.form.setFieldsValue({ lineId: '' })
		if (!wareHouseId) return setWareHouseTagLines([{ id: '', name: '全部线路' }])
		const { result = [] } = await requestAPI({
			urlType: {
				type: 'post',
				url: getSingleWareHouseTagLines
			},
			wareHouseIdList: [wareHouseId]
		})
		result.unshift({ id: '', name: '全部线路' })
		setWareHouseTagLines(result)
	}

	const getTableData = async ({ current, pageSize, ...rest }) => {
		const { pagination, result } = await requestAPI({
			urlType: {
				type: 'post',
				url: shopsLists
			},
			page: current,
			pageSize,
			...rest
		})
		return {
			...pagination,
			data: result
		}
	}

	const { tableProps, search } = useAntdTable(getTableData, [selectShopModalVisible], {
		defaultPageSize: 10,
		form: props.form,
		id: 'modalTable'
	})

	const { submit } = search || {}

	const dialogColumns = [
		{
			title: '店铺编码',
			dataIndex: 'code',
			key: 'code'
		},
		{
			title: '店铺名称',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: '仓库',
			dataIndex: 'wareHouseList',
			key: 'wareHouseList',
			render: (text, record, index) => {
				if (text && text.length) return text[0].name
			}
		},
		{
			title: '路线',
			dataIndex: 'lineList',
			key: 'lineList',
			render: (text, record, index) => {
				if (text && text.length) return text[0].name
			}
		},
		{
			title: '店铺等级',
			key: 'rank',
			render: (text, record, index) => {
				return record.rank ? record.rank.name : ''
			}
		},
		{
			title: '店铺状态',
			dataIndex: 'status',
			key: 'status',
			render: (text, record, index) => {
				return text.name
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

	const handleMultipleSearch = async searchStr => {
		const { result = [] } = await requestAPI({
			urlType: {
				type: 'get',
				url: findShopListByIdsVo
			},
			ids: searchStr
		})
		const { excludeIds = [], shopVoList = [] } = result
		const modalSelectedShopsKeys = modalSelectedShops.map(item => item.id)
		let newarr = shopVoList.filter(item => !modalSelectedShopsKeys.includes(item.id))
		setModalSelectedShops(modalSelectedShops.concat(newarr))
		setModalSelectedRowKeys(modalSelectedRowKeys.concat(newarr.map(item => item.id)))
		props.form.setFieldsValue({
			multipleSearch: `查询失败:${excludeIds.join(',')}`
		})
	}

	const { getFieldDecorator } = props.form

	const searchFrom = (
		<div
			style={{
				marginBottom: 16
			}}>
			<Form
				style={{
					display: 'flex',
					justifyContent: 'space-around'
				}}>
				{getFieldDecorator('status', {
					initialValue: ''
				})(
					<Select
						placeholder='选择店铺状态'
						style={{
							width: 200
						}}
						onChange={submit}>
						{(shopStatusSelect || []).map(item => (
							<Option value={'' + item.id} key={'' + item.id}>
								{item.name}
							</Option>
						))}
					</Select>
				)}
				{getFieldDecorator('wareHouseId', {
					initialValue: ''
				})(
					<Select
						placeholder='选择仓库'
						style={{
							width: 200
						}}
						onChange={val => {
							getWareHouseTagLines(val)
							submit()
						}}>
						{(wareHouse || []).map(item => (
							<Option value={'' + item.id} key={'' + item.id}>
								{item.name}
							</Option>
						))}
					</Select>
				)}
				{getFieldDecorator('lineId', {
					initialValue: ''
				})(
					<Select
						placeholder='选择路线'
						style={{
							width: 200
						}}
						onChange={submit}>
						{(wareHouseTagLines || []).map(item => (
							<Option value={'' + item.id} key={'' + item.id}>
								{item.name}
							</Option>
						))}
					</Select>
				)}
				{getFieldDecorator('search', {
					initialValue: ''
				})(
					<Input
						placeholder='请输入店铺名称/编码'
						style={{
							width: 200
						}}
						onPressEnter={submit}
					/>
				)}
				<Button
					type='primary'
					onClick={() => {
						setSelectShopModalVisible(false)
						setMultipleSearchModalVisible(true)
					}}>
					编码导入
				</Button>
			</Form>
		</div>
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
				<Table columns={dialogColumns} rowSelection={rowSelection} bordered rowKey='id' {...tableProps} />
			</Modal>

			{multipleSearchModalVisible && (
				<Modal
					zIndex={2000}
					visible={multipleSearchModalVisible}
					title='多内容查询'
					closable={false}
					maskClosable={false}
					okText='提交并全部选择'
					onCancel={() => setMultipleSearchModalVisible(false)}
					onOk={() => {
						props.form.validateFields(['multipleSearch'], (error, values) => {
							if (error) return
							const { multipleSearch } = values
							handleMultipleSearch(multipleSearch)
						})
					}}>
					<h3>请输入门店编号或名称，以“、”分隔</h3>
					<FormItem>
						{getFieldDecorator('multipleSearch', {
							rules: [{ required: true, message: '请输入门店编号或名称，以“、”分隔' }]
						})(<TextArea rows={10} placeholder='请输入门店编号或名称，以“、”分隔' />)}
					</FormItem>
				</Modal>
			)}
		</div>
	)
}

export default Form.create()(SelectShops)
