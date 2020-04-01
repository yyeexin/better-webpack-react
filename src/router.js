import React from 'react'
import { dynamic, routerRedux, router as reactRouter } from 'dva'
const { Route, Switch, Redirect } = reactRouter
const { ConnectedRouter } = routerRedux
import Layout from './layouts'

const router = ({ history, app }) => {
	const routes = [
		{
			path: '/login',
			component: () => import('./pages/Login')
		},
		{
			path: '/article',
			component: () => import('./pages/Article')
		},
		{
			path: '/home',
			component: () => import('./pages/Home')
		},
		{
			path: '/shop/shops',
			component: () => import('./pages/Shop')
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
			path: '/test',
			component: () => import('./pages/Test')
		},
		{
			path: '/editor',
			component: () => import('./pages/Editor')
		},
		{
			path: '/customForm',
			component: () => import('./pages/CustomForm')
		}
	]
	return (
		<ConnectedRouter history={history}>
			<Layout>
				<Switch>
					<Redirect exact from='/' to='/customForm' />
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
