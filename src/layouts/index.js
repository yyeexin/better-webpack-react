import { connect, router as reactRouter } from 'dva'
import MenuLayout from './MenuLayout'

const Layout = props => {
	const { router, children } = props
	const { location } = router
	const { pathname } = location
	console.log(pathname, pathname === '/login', props)
	if (pathname === '/login') {
		return <>{children}</>
	}
	return <MenuLayout {...props} />
}

export default connect(({ app, dispatch, router }) => ({ app, dispatch, router }))(Layout)
