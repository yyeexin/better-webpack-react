import React, { useState } from 'react'
import { connect } from 'dva'
import styled from 'styled-components'
import { hot } from 'react-hot-loader/root'
import { Switch, Button } from 'antd'

const Shop = props => {
	function onChange(val) {
		console.log(val)
	}

	const [count, setCount] = useState(0)

	const StyledButton = styled(Button)`
		background: ${props => (props.color ? 'palevioletred' : 'white')};
		width: 100px;
		height: 50px;
		&.ant-btn:focus {
			// background-color: yellow;
		}
	`
	return (
		<div>
			<Switch defaultChecked onChange={onChange} />
			<StyledButton type='primary' danger color={count % 2 === 0} onClick={() => setCount(count + 1)}>
				{count}
			</StyledButton>
		</div>
	)
}

export default connect(({ shop }) => ({ shop }))(hot(Shop))
