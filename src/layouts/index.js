import React, { memo } from 'react'
import { connect } from 'dva'
import MenuLayout from './MenuLayout'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

const Layout = memo(props => {
	const { router, children } = props
	const { location } = router
	const { pathname } = location
	return <ConfigProvider locale={zhCN}>{pathname === '/login' ? children : <MenuLayout {...props} />}</ConfigProvider>
})

export default connect(({ app, dispatch, router }) => ({ app, dispatch, router }))(Layout)
