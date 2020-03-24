import { connect, router as reactRouter } from 'dva'
const { withRouter } = reactRouter
import MenuLayout from './MenuLayout'

const Layout = props => {
	const { location, children } = props
	const { pathname } = location
	console.log(pathname, props, pathname === '/login')
	return pathname === '/login' ? children : <MenuLayout {...props} />
}

export default withRouter(connect(({ app, dispatch }) => ({ app, dispatch }))(Layout))
