import React from 'react'
import { connect } from 'dva'
import { Button, Col, Form, Input, Row, Table, Select } from 'antd'
import { hot } from 'react-hot-loader/root'
import { useFormTable } from '@umijs/hooks'
const { Option } = Select

const Shop = props => {
	const getTableData = async ({ current, pageSize }, formData) => {
		const data = await props.dispatch({
			type: `shop/query`,
			payload: {
				page: current,
				pageSize: pageSize
			}
		})
		return data
	}

	const [form] = Form.useForm()
	const { tableProps, search, loading } = useFormTable(getTableData, {
		defaultPageSize: 10,
		form: form
	})
	console.log('loading', loading)

	const { type, changeType, submit, reset } = search

	const columns = [
		{
			title: '名称',
			dataIndex: 'name'
		},
		{
			title: '编码',
			dataIndex: 'code'
		},
		{
			title: '品牌',
			dataIndex: 'brand'
		},
		{
			title: '管理账号',
			dataIndex: 'account'
		},
		{
			title: '地址',
			key: 'address',
			render(text, record, index) {
				return `${record.province}${record.city}${record.district}${record.address}`
			}
		},
		{
			title: '联系人',
			dataIndex: 'contact'
		},
		{
			title: '联系电话',
			dataIndex: 'phone'
		},
		{
			title: '店铺状态',
			dataIndex: 'status.name'
		},
		{
			title: '启用状态',
			dataIndex: 'enabled',
			render(text, record, index) {
				return text ? '启用' : '停用'
			}
		},
		{
			title: '仓库',
			dataIndex: 'wareHouseList[0].name'
		},
		{
			title: '签约时间',
			dataIndex: 'joinedTime'
		},
		{
			title: '操作',
			key: 'operation',
			render(text, record, index) {
				return <a>查看</a>
			}
		}
	]
	return <Table columns={columns} rowKey='id' {...tableProps} />
}

export default connect(({ dispatch, shop }) => ({ dispatch, shop }))(hot(Shop))
