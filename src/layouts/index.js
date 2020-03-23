import MenuLayout from './MenuLayout'

const Layout = props => {
	const { location, children } = props
	const { pathname } = location
	console.log('Layout执行', pathname, props, pathname === '/login')
	return pathname === '/login' ? children : <MenuLayout {...props} />
}

export default Layout
