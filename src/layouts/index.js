import { connect, router as reactRouter } from 'dva'
const { withRouter } = reactRouter
import MenuLayout from './MenuLayout'

const Layout = props => {
	const { location, children } = props
	const { pathname } = location
	console.log(pathname, pathname === '/login', props)
	if (pathname === '/login') {
		return <>{children}</>
	}
	return <MenuLayout {...props} />
}

export default withRouter(connect(({ app, dispatch }) => ({ app, dispatch }))(Layout))
