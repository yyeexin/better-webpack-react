import React, { memo } from 'react'
import { connect } from 'dva'
import MenuLayout from './MenuLayout'

const Layout = memo(props => {
	const { router, children } = props
	const { location } = router
	const { pathname } = location
	if (pathname === '/login') {
		return <>{children}</>
	}
	return <MenuLayout {...props} />
})

export default connect(({ app, dispatch, router }) => ({ app, dispatch, router }))(Layout)
