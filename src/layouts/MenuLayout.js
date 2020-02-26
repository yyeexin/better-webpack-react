import { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { connect } from 'dva'
import { Icon } from '@ant-design/compatible'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
import logo from 'assets/image/logo.jpg'
import { Link } from 'dva/router'

const MenuLayout = ({ router, children, dispatch, app }) => {
	const [collapsed, setCollapsed] = useState(false)
	const { menus } = app
	useEffect(() => {
		dispatch({ type: `app/getMenus` })
	}, [])

	const toggle = () => {
		setCollapsed(collapsed => !collapsed)
	}

	const generateMenus = (menus, collapsed) => {
		return menus.map(item => {
			const { id, menuIcon, menuName, menuUrl, menuCode, children = [] } = item
			if (children && children.length > 0) {
				return (
					<Menu.SubMenu
						key={menuCode}
						title={
							<>
								{menuIcon && <Icon type={menuIcon} />}
								<span>{menuName}</span>
							</>
						}
						children={generateMenus(children, collapsed)}
					/>
				)
			} else {
				return (
					<Menu.Item key={menuCode} title={menuName}>
						<Link to={menuUrl || '#'}>
							{menuIcon && <Icon type={menuIcon} />}
							<span>{menuName}</span>
						</Link>
					</Menu.Item>
				)
			}
		})
	}

	return (
		<Layout style={{ height: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={toggle}>
				<div className='menu-logo'>
					<img src={logo} />
					{!collapsed && <span>古茗电商</span>}
				</div>
				<Menu theme='dark' defaultSelectedKeys={['1']} mode={collapsed ? 'vertical' : 'inline'}>
					{generateMenus(menus, collapsed)}
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

export default connect(({ dispatch, app }) => ({ dispatch, app }))(MenuLayout)
