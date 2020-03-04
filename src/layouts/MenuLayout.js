import { useState, useEffect, useMemo, memo } from 'react'
import { Layout, Menu, Breadcrumb, Switch } from 'antd'
import { Icon } from '@ant-design/compatible'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { connect } from 'dva'
import { Link } from 'dva/router'
import logo from 'assets/image/logo.jpg'
const { Header, Content, Footer, Sider } = Layout

const MenuLayout = memo(({ router: { location }, children, dispatch, app }) => {
	const { menus } = app
	const [collapsed, setCollapsed] = useState(false)

	useEffect(() => {
		dispatch({ type: `app/getMenus` })
		let timer
		window.addEventListener('resize', () => {
			if (timer) clearTimeout(timer)
			timer = setTimeout(() => {
				setCollapsed(() => document.body.clientWidth < 769)
			}, 300)
		})
		return () => {
			clearTimeout(timer)
			window.removeEventListener('resize')
		}
	}, [])

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

	const flatMenus = menus => {
		return menus.reduce((previousValue, currentValue) => {
			previousValue.push(currentValue)
			if (currentValue.children && currentValue.children.length) {
				Array.prototype.push.apply(previousValue, flatMenus(currentValue.children))
			}
			return previousValue
		}, [])
	}

	const flatedMenus = useMemo(() => {
		// console.log('扁平菜单数据')
		return flatMenus(menus)
	}, [menus])

	const generateBreads = currentPath => {
		function getBreadCrumbArray(menu, breadArray) {
			breadArray.unshift(menu)
			if (menu.menuPcode && menu.menuPcode !== '001') {
				const parentMenu = flatedMenus.find(item => item.menuCode === menu.menuPcode)
				getBreadCrumbArray(parentMenu, breadArray)
			}
		}
		const current = flatedMenus.find(item => currentPath == item.menuUrl)
		const breadArray = []
		current && getBreadCrumbArray(current, breadArray)
		return breadArray
	}

	const breadCrumbArray = useMemo(() => {
		// console.log('生成面包屑')
		return generateBreads(location.pathname)
	}, [location.pathname, menus])

	const menusItems = useMemo(() => {
		// console.log('生成菜单')
		return generateMenus(menus, collapsed)
	}, [menus])

	return (
		<Layout style={{ height: '100vh' }}>
			<Sider collapsed={collapsed} onCollapse={() => setCollapsed(collapsed => !collapsed)}>
				<div className='menu-logo'>
					<img src={logo} />
					{!collapsed && <span>古茗电商</span>}
				</div>
				<Menu theme='dark' defaultSelectedKeys={['001007']} mode={collapsed ? 'vertical' : 'inline'}>
					{menusItems}
				</Menu>
				{!collapsed && (
					<div>
						<span>
							<Icon type='bulb' />
							切换主题风格
						</span>
						<Switch
							// onChange={changeTheme}
							// defaultChecked={darkTheme}
							checkedChildren='深色'
							unCheckedChildren='浅色'
						/>
					</div>
				)}
			</Sider>
			<Layout>
				<Header style={{ backgroundColor: '#fff', height: 40, display: 'flex', alignItems: 'center' }}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: () => setCollapsed(collapsed => !collapsed)
					})}
				</Header>
				<Breadcrumb>
					{breadCrumbArray.map(item => (
						<Breadcrumb.Item key={item.menuCode}>
							<Icon type={item.menuIcon} />
							<span>{item.menuName}</span>
						</Breadcrumb.Item>
					))}
				</Breadcrumb>
				<Content>{children}</Content>
				<Footer style={{ height: 50, textAlign: 'center', padding: '10px 0' }}>
					Ant Design ©2020 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	)
})

export default connect(({ dispatch, app, router }) => ({ dispatch, app, router }))(MenuLayout)
