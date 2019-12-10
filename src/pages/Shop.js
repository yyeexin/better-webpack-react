import { Table } from 'antd'
import React from 'react'
import { useAntdTable } from '@umijs/hooks'

const getTableData = ({ current, pageSize }) =>
	fetch(`https://randomuser.me/api?results=55&page=${current}&size=${pageSize}`)
		.then(res => res.json())
		.then(res => ({
			total: res.info.results,
			data: res.results
		}))

export default () => {
	const { tableProps } = useAntdTable(getTableData, [], {})
	console.log(tableProps)
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
	return <Table columns={columns} rowKey='email' {...tableProps} />
}
