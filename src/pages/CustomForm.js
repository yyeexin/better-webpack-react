import React from 'react'
import { Card } from 'antd'
import { hot } from 'react-hot-loader/root'
import CusFrom from '@/components/CustomForm'
const CustomForm = () => {
	return (
		<Card>
			<CusFrom />
		</Card>
	)
}

export default hot(CustomForm)
