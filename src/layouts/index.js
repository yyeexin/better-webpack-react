import { connect } from 'dva'
import MenuLayout from './MenuLayout'

const DefaultLayout = ({ router, children }) => {
	const { pathname } = router.location
	return pathname === '/login' ? children : <MenuLayout children={children} />
}

export default connect(({ router }) => ({ router }))(DefaultLayout)
