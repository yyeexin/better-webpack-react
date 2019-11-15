import React, { Suspense } from 'react'
import dynamic from 'dva/dynamic'
import { Route, Switch, routerRedux, HashRouter, Redirect } from 'dva/router'
const { ConnectedRouter } = routerRedux

const router = ({ history, app }) => {
	const routes = [
		{
			path: '/',
			component: () => import('./pages/Home')
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
			path: '/page404',
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
						<Redirect from='/*' to='/page404' />
					</Switch>
				</HashRouter>
			</Suspense>
		</ConnectedRouter>
	)
}

export default router
