import React from 'react'
import image from 'assets/image/sd.jpg'
import { connect, routerRedux, router } from 'dva'

const page404 = props => {
	return (
		<div style={{ textAlign: 'center' }}>
			<p>404: Page not found</p>
			<img src={image}></img>
			<br />
			<button onClick={() => props.dispatch(routerRedux.push('/shop/shops'))}>/shop</button>
			<button onClick={() => (window.location.href = '/#/shop/shops')}>/shop2</button>
			<button
				onClick={() =>
					props.dispatch({
						type: 'app/goShops'
					})
				}>
				/dispatch shop3
			</button>
			<button
				onClick={() =>
					props.dispatch({
						type: 'app/goShops2'
					})
				}>
				/dispatch shop4
			</button>
			<br />
			<button onClick={() => props.dispatch(routerRedux.push('/home'))}>/home1</button>
			<button onClick={() => (window.location.href = '/#/home')}>/home2</button>
			<button
				onClick={() =>
					props.dispatch({
						type: 'app/goHome'
					})
				}>
				/dispatch home3
			</button>
			<button
				onClick={() =>
					props.dispatch({
						type: 'app/goHome2'
					})
				}>
				/dispatch home4
			</button>
		</div>
	)
}

export default connect(({ dispatch, app }) => ({ dispatch, app }))(page404)
