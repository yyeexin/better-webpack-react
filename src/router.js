import React, { Suspense } from 'react'
import { dynamic, routerRedux, router as dvarouter } from 'dva'
const { Route, Switch, HashRouter, Redirect } = dvarouter
const { ConnectedRouter } = routerRedux

const router = ({ history, app }) => {
	const routes = [
		{
			path: '/',
			component: () => import('./pages/Home')
		},
		{
			path: '/login',
			component: () => import('./pages/Login')
		},
		{
			path: '/user',
			component: () => import('./pages/User')
		},
		{
			path: '/shop',
			component: () => import('./pages/Shop')
		},
		{
			path: '/notFound',
			component: () => import('./pages/404')
		}
	]

	return (
		<ConnectedRouter history={history}>
			<Suspense fallback={<div>Loading...</div>}>
				<HashRouter>
					<Switch>
						{routes.map(({ path, ...rest }, index) => {
							return <Route key={index} exact path={path} component={dynamic({ app, ...rest })} />
						})}
						<Redirect from='/*' to='/notFound' />
					</Switch>
				</HashRouter>
			</Suspense>
		</ConnectedRouter>
	)
}

export default router
