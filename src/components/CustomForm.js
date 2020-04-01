import React, { useState } from 'react'
import { Row, Col, Card } from 'antd'
import styled from 'styled-components'
import { useThrottleFn } from '@umijs/hooks'
import {
	EnvironmentOutlined,
	FileAddOutlined,
	EditOutlined,
	FormOutlined,
	FieldBinaryOutlined,
	CheckCircleOutlined,
	CheckSquareOutlined,
	DownCircleOutlined,
	DownSquareOutlined,
	CalendarOutlined,
	FileImageOutlined,
	CameraOutlined,
	PlusOutlined
} from '@ant-design/icons'

const StyledFormItemUL = styled.ul`
	min-height: 60px;
	padding: 0;
	li {
		list-style: none;
		cursor: move;
		margin: 5px 0;
		padding: 5px 10px;
		border: 1px solid #e8e8e8;
		border-radius: 2px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		span:nth-child(2) {
			padding-left: 10px;
		}
		span:nth-child(3) {
			margin-left: auto;
		}
		&:hover {
			border: 1px solid #f95;
		}
	}
	@media only screen and (max-width: 768px) {
		li {
			display: inline-flex;
			width: 49%;
		}
		li:nth-child(odd) {
			margin-right: 2%;
		}
	}
	@media only screen and (max-width: 576px) {
		li {
			display: flex;
			width: 100%;
		}
	}
`

const CustomForm = props => {
	const [dragActive, setDragActive] = useState(false)

	const FormItemDefin = [
		{
			icon: EnvironmentOutlined,
			text: '所在城市',
			type: 'city'
		},
		{
			icon: FileAddOutlined,
			text: '附件',
			type: 'upload'
		},
		{
			icon: EditOutlined,
			text: '单行文本框',
			type: 'input'
		},
		{
			icon: FormOutlined,
			text: '多行文本框',
			type: 'textarea'
		},
		{
			icon: FieldBinaryOutlined,
			text: '数字文本框',
			type: 'number'
		},
		{
			icon: CheckCircleOutlined,
			text: '单选按钮框',
			type: 'radio',
			withChild: true
		},
		{
			icon: CheckSquareOutlined,
			text: '多选按钮框',
			type: 'checkbox',
			withChild: true
		},
		{
			icon: DownCircleOutlined,
			text: '下拉单选框',
			type: 'select',
			withChild: true
		},
		{
			icon: DownSquareOutlined,
			text: '下拉多选框',
			type: 'select_multiple',
			withChild: true
		},
		{
			icon: CalendarOutlined,
			text: '日期选择框',
			type: 'date'
		},
		{
			icon: FileImageOutlined,
			text: '图片展示',
			type: 'img'
		},
		{
			icon: CameraOutlined,
			text: '拍照',
			type: 'photo'
		}
	]

	const handleAddFormItem = item => {
		console.log(item)
	}

	const onDragStart = (e, item) => {
		e.dataTransfer.dropEffect = 'move'
		e.dataTransfer.setData('formItem', JSON.stringify(item))
	}

	const { run: onDragOver } = useThrottleFn(() => {
		setDragActive(true)
	}, 500)

	return (
		<Card size='small'>
			<Row>
				<Col xs={24} sm={24} md={16} lg={18} xl={18} xxl={18}>
					<Card size='small' bordered={dragActive} onDragOver={onDragOver}></Card>
				</Col>
				<Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
					<Card title='表单项' size='small'>
						<StyledFormItemUL>
							{FormItemDefin.map(item => (
								<li
									key={item.type}
									draggable
									onDragStart={e => onDragStart(e, item)}
									onClick={() => handleAddFormItem(item)}>
									<item.icon />
									<span>{item.text}</span>
									<PlusOutlined />
								</li>
							))}
						</StyledFormItemUL>
					</Card>
				</Col>
			</Row>
		</Card>
	)
}

export default CustomForm
