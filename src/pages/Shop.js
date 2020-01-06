import React, { useState } from 'react'
import { connect } from 'dva'
import styled from 'styled-components'
import { hot } from 'react-hot-loader/root'
import { Switch, Button } from 'antd'

const StyledButton = styled(Button)`
	border-radius: ${props => (props.radius % 2 === 0 ? '0' : '20px')};
	width: 100px;
	height: 50px;
`

const Shop = props => {
	const [count, setCount] = useState(0)

	function onChange(val) {
		console.log(val)
	}

	return (
		<div>
			<Switch defaultChecked onChange={onChange} />
			<StyledButton type='primary' radius={count} onClick={() => setCount(count + 1)}>
				{count}
			</StyledButton>
		</div>
	)
}

export default connect(({ shop }) => ({ shop }))(hot(Shop))
