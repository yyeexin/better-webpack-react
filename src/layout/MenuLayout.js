import { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { DesktopOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const MenuLayout = ({ router, children }) => {
	const [collapsed, setCollapsed] = useState(false)
	const toggle = () => {
		setCollapsed(collapsed => !collapsed)
	}
	return (
		<Layout style={{ height: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={toggle}>
				<div className='logo' />
				<Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
					<Menu.Item key='1'>
						<PieChartOutlined />
						<span>Option 1</span>
					</Menu.Item>
					<Menu.Item key='2'>
						<DesktopOutlined />
						<span>Option 2</span>
					</Menu.Item>
					<SubMenu
						key='sub1'
						title={
							<span>
								<UserOutlined />
								<span>User</span>
							</span>
						}>
						<Menu.Item key='3'>Tom</Menu.Item>
						<Menu.Item key='4'>Bill</Menu.Item>
						<Menu.Item key='5'>Alex</Menu.Item>
					</SubMenu>
					<SubMenu
						key='sub2'
						title={
							<span>
								<TeamOutlined />
								<span>Team</span>
							</span>
						}>
						<Menu.Item key='6'>Team 1</Menu.Item>
						<Menu.Item key='8'>Team 2</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout>
				<Header style={{ backgroundColor: '#fff', height: 40 }}>
					<Breadcrumb>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
				</Header>
				<Content>{children}</Content>
				<Footer style={{ height: 50, textAlign: 'center', padding: '10px 0' }}>
					Ant Design ©2020 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	)
}

export default MenuLayout
