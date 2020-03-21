import React from 'react'
import { dynamic, routerRedux, router as reactRouter } from 'dva'
const { Route, Switch, Redirect } = reactRouter
const { ConnectedRouter } = routerRedux
import Layout from './layouts'

const router = ({ history, app }) => {
	const routes = [
		{
			path: '/shop/shops',
			component: () => import('./pages/Shop')
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
			path: '/hooks',
			component: () => import('./pages/Hooks')
		},
		{
			path: '/login',
			component: () => import('./pages/Login')
		}
	]
	return (
		<ConnectedRouter history={history}>
			<Layout>
				<Switch>
					<Route exact path='/' render={() => <Redirect to='/home' />} />
					{routes.map(({ path, ...rest }) => (
						<Route exact key={path} path={path} component={dynamic({ app, ...rest })} />
					))}
					<Route component={dynamic({ app, component: () => import('./pages/404') })} />
				</Switch>
			</Layout>
		</ConnectedRouter>
	)
}

export default router
