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
			title: 'name',
			dataIndex: 'name.last'
		},
		{
			title: 'email',
			dataIndex: 'email'
		},
		{
			title: 'phone',
			dataIndex: 'phone'
		},
		{
			title: 'gender',
			dataIndex: 'gender'
		}
	]
	return <Table columns={columns} rowKey='id' {...tableProps} />
}

export default connect(({ dispatch, shop }) => ({ dispatch, shop }))(hot(Shop))
