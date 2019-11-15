import React from 'react'
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
			<HashRouter>
				<Switch>
					{routes.map(({ path, ...rest }, index) => {
						console.log('加载路由:', path)
						return <Route key={index} exact path={path} component={dynamic({ app, ...rest })} />
					})}
					<Redirect from='/*' to='/page404' />
				</Switch>
			</HashRouter>
		</ConnectedRouter>
	)
}

export default router
