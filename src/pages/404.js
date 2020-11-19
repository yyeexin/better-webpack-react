import React from 'react'
import image from '@/assets/image/sd.jpg'
import { connect, routerRedux, router } from 'dva'

const page404 = props => {
	return (
		<div style={{ textAlign: 'center' }}>
			<p>404: Page not found</p>
			<img src={image}></img>
		</div>
	)
}

export default connect(({ dispatch, app }) => ({ dispatch, app }))(page404)
