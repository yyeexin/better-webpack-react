import { connect } from 'dva'
import MenuLayout from './MenuLayout'

const Layout = ({ router, children, ...rest }) => {
	console.log(router, children, rest)
	const { pathname } = router.location
	return pathname === '/login' ? children : <MenuLayout children={children} />
}

export default connect(({ router }) => ({ router }))(Layout)
