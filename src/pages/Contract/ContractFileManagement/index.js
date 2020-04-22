import React, { useEffect } from 'react'
import { connect } from 'dva'
import { hot } from 'react-hot-loader/root'

const ContractFileManagement = props => {
	const { dispatch } = props
	useEffect(() => {
		dispatch({ type: 'app/getContractType' })
		dispatch({ type: 'app/getContractStatus' })
		dispatch({ type: 'app/getContractDictionary' })
	}, [])

	return <div></div>
}

export default connect(({ dispatch, app, contractFileManagement }) => ({ dispatch, app, contractFileManagement }))(
	hot(ContractFileManagement)
)
