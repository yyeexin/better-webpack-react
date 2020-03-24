import { useState, useEffect, useMemo } from 'react'
import { Layout, Menu, Breadcrumb, Switch } from 'antd'
import { router as reactRouter } from 'dva'
import { Icon } from '@ant-design/compatible'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { GlobalMenuStyle, MenuLogoDiv, ThemeSwitchDiv } from './styled-components'
import logo from 'assets/image/logo.jpg'
const { Link } = reactRouter
const { Header, Content, Footer, Sider } = Layout

let timer

const MenuLayout = ({ router: { location }, children, dispatch, app }) => {
	console.log('渲染layout')
	const { menus } = app
	const [collapsed, setCollapsed] = useState(!!window.sessionStorage.getItem('collapsed'))
	const [checked, setChecked] = useState(true)

	const changeMenuCollapsed = () => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			setCollapsed(() => !!window.sessionStorage.getItem('collapsed') || document.body.clientWidth < 993)
		}, 300)
	}

	useEffect(() => {
		dispatch({ type: `app/getMenus` })
		window.addEventListener('resize', changeMenuCollapsed)
		window.addEventListener('pageshow', changeMenuCollapsed)
		return () => {
			clearTimeout(timer)
			window.removeEventListener('resize', changeMenuCollapsed)
			window.removeEventListener('pageshow', changeMenuCollapsed)
		}
	}, [])

	const generateMenus = menus => {
		return menus.map(item => {
			const { menuIcon, menuName, menuUrl, menuCode, children = [] } = item
			return children && children.length > 0 ? (
				<Menu.SubMenu
					key={menuCode}
					title={
						<>
							{menuIcon && <Icon type={menuIcon} />}
							<span>{menuName}</span>
						</>
					}>
					{generateMenus(children)}
				</Menu.SubMenu>
			) : (
				<Menu.Item key={menuCode}>
					<Link to={menuUrl || '#'}>
						{menuIcon && <Icon type={menuIcon} style={{ marginRight: 10 }} />}
						<span>{menuName}</span>
					</Link>
				</Menu.Item>
			)
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

	function getBreadCrumbArray(currentLocation, breadArray) {
		breadArray.unshift(currentLocation)
		if (currentLocation.menuPcode && currentLocation.menuPcode !== '001') {
			const parentMenu = flatedMenus.find(item => item.menuCode === currentLocation.menuPcode)
			getBreadCrumbArray(parentMenu, breadArray)
		}
	}

	const menusItems = useMemo(() => {
		console.log('生成菜单')
		return generateMenus(menus)
	}, [menus])

	const flatedMenus = useMemo(() => {
		console.log('铺平菜单')
		return flatMenus(menus)
	}, [menus])

	const currentLocation = useMemo(() => {
		return flatedMenus.find(item => location.pathname == item.menuUrl)
	}, [location.pathname, flatedMenus])

	const breadCrumbArray = useMemo(() => {
		console.log('生成面包屑')
		window.document.title = (currentLocation && currentLocation.menuName) || '古茗电商'
		const breadArray = []
		currentLocation && getBreadCrumbArray(currentLocation, breadArray)
		return breadArray
	}, [currentLocation])

	return (
		<Layout style={{ height: '100vh' }}>
			<GlobalMenuStyle dark={checked} collapsed={collapsed} />
			<Sider
				collapsed={collapsed}
				onCollapse={() => {
					setCollapsed(collapsed => !collapsed)
					window.sessionStorage.setItem('collapsed', !collapsed)
				}}>
				<MenuLogoDiv dark={checked}>
					<img src={logo} />
					{!collapsed && <span>古茗电商</span>}
				</MenuLogoDiv>
				<Menu
					theme={checked ? 'dark' : 'light'}
					selectedKeys={[currentLocation && currentLocation.menuCode]}
					mode={collapsed ? 'vertical' : 'inline'}>
					{menusItems}
				</Menu>
				{!collapsed && (
					<ThemeSwitchDiv dark={checked}>
						<Icon type='bulb' />
						<span>切换主题</span>
						<Switch
							checked={checked}
							onChange={() => setChecked(checked => !checked)}
							checkedChildren='深色'
							unCheckedChildren='浅色'
						/>
					</ThemeSwitchDiv>
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
							{item.menuIcon && <Icon type={item.menuIcon} />}
							<span>{item.menuName}</span>
						</Breadcrumb.Item>
					))}
				</Breadcrumb>
				<Content style={{ minHeight: 'initial', padding: '0 24px' }}>{children}</Content>
				<Footer style={{ height: 50, lineHeight: '30px', textAlign: 'center', padding: '10px 0' }}>
					Ant Design ©2020 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	)
}

export default MenuLayout
