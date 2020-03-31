import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Card } from 'antd'
import { hot } from 'react-hot-loader/root'
import { connect } from 'dva'
import { CardTitle } from './styled-components'
import MapChart from './components/MapChart'
const Home = props => {
	useEffect(() => {
		props.dispatch({ type: `home/getShopAreaData` })
	}, [])
	return (
		<>
			<Row gutter={10}>
				<Col span={12}>
					<Card size='small' title={<CardTitle>账户信息</CardTitle>}></Card>
				</Col>
				<Col span={12}>
					<Card size='small' title={<CardTitle>交单统计</CardTitle>}></Card>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Card size='small' title={<CardTitle>订单统计</CardTitle>}>
						<MapChart areaData={props.home.shopAreaData} />
					</Card>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Card size='small' title={<CardTitle>订货统计</CardTitle>}></Card>
				</Col>
			</Row>
			<Row gutter={10}>
				<Col span={12}>
					<Card size='small' title={<CardTitle>新增店铺</CardTitle>}></Card>
				</Col>
				<Col span={12}>
					<Card size='small' title={<CardTitle>店铺分布</CardTitle>}></Card>
				</Col>
			</Row>
		</>
	)
}

export default connect(({ dispatch, home }) => ({ dispatch, home }))(hot(Home))
