import React from 'react'
import { connect } from 'dva'

const Shop = props => {
	console.log(props)
	return <div>Shop Page</div>
}

export default connect(({ shop }) => ({ shop }))(Shop)
