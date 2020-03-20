import React from 'react'
import { dynamic, routerRedux, router as reactRouter } from 'dva'
const { Route, Switch, HashRouter } = reactRouter
const { ConnectedRouter } = routerRedux
import Layout from './layouts'

const router = ({ history, app }) => {
	const routes = [
		{
			path: '/login',
			component: () => import('./pages/Login')
		},
		{
			path: '/home',
			component: () => import('./pages/Home')
		},
		{
			path: '/user',
			component: () => import('./pages/User')
		},
		{
			path: '/shop/shops',
			component: () => import('./pages/Shop')
		},
		{
			path: '/hooks',
			component: () => import('./pages/Hooks')
		}
	]

	return (
		<ConnectedRouter history={history}>
			<HashRouter>
				<Layout>
					<Switch>
						{routes.map(({ path, ...rest }, index) => {
							return <Route key={index} exact path={path} component={dynamic({ app, ...rest })} />
						})}
						<Route component={dynamic({ app, component: () => import('./pages/404') })} />
					</Switch>
				</Layout>
			</HashRouter>
		</ConnectedRouter>
	)
}

export default router
