import { router as reactRouter } from 'dva'
const { withRouter } = reactRouter
import MenuLayout from './MenuLayout'

const Layout = ({ location, children }) => {
	const { pathname } = location
	return pathname === '/login' ? children : <MenuLayout children={children} />
}

export default withRouter(Layout)
