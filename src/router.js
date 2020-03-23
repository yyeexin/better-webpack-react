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
			path: '/hooks1',
			component: () => import('./pages/Hooks')
		},
		{
			path: '/hooks2',
			component: () => import('./pages/Hooks')
		},
		{
			path: '/hooks3',
			component: () => import('./pages/Hooks')
		},
		{
			path: '/login',
			component: () => import('./pages/Login')
		}
	]
	return (
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path='/' render={() => <Redirect to='/home' />} />
				{routes.map(({ path, ...rest }) => (
					<Route
						exact
						key={path}
						path={path}
						render={props => {
							console.log('route生成')
							const Component = dynamic({ app, ...rest })
							return (
								<Layout {...props}>
									<Component {...props} />
								</Layout>
							)
						}}
					/>
				))}
				<Route component={dynamic({ app, component: () => import('./pages/404') })} />
			</Switch>
		</ConnectedRouter>
	)
}

export default router
