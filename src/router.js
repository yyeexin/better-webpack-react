import React, { Suspense } from 'react'
import { dynamic, routerRedux, router as dvarouter } from 'dva'
const { Route, Switch, HashRouter, Redirect } = dvarouter
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
			path: '/shop',
			component: () => import('./pages/Shop')
		},
		{
			path: '/hooks',
			component: () => import('./pages/Hooks')
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
					<Layout routeConfig={routes}>
						<Switch>
							{routes.map(({ path, ...rest }, index) => {
								return <Route key={index} exact path={path} component={dynamic({ app, ...rest })} />
							})}
							<Route component={dynamic({ app, component: () => import('./pages/404') })} />
							{/* <Redirect from='/*' to='/notFound' /> */}
						</Switch>
					</Layout>
				</HashRouter>
			</Suspense>
		</ConnectedRouter>
	)
}

export default router
