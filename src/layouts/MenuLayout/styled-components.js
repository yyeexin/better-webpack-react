import styled, { createGlobalStyle } from 'styled-components'

export const MenuLogoDiv = styled.div`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	background-color: ${props => (props.dark ? '#002140' : '#ffffff')};
	top: 0;
	opacity: 1;
	z-index: 10;
	img {
		width: 40px;
	}
	span {
		color: ${props => (props.dark ? '#ffffff' : '#000000')};
		margin-left: 10px;
		white-space: nowrap;
		overflow: hidden;
	}
`

export const ThemeSwitchDiv = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	height: 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px 0 24px;
	background-color: ${props => (props.dark ? '#002140' : '#ffffff')};
	color: ${props => (props.dark ? '#ffffff' : '#000000')};
	span {
		white-space: nowrap;
		overflow: hidden;
	}
`

export const GlobalMenuStyle = createGlobalStyle`
.ant-layout-sider {
	background-color: ${props => (props.dark ? '#001529' : '#ffffff')};
	.ant-layout-sider-children {
		overflow-y: scroll;
		overflow-x: hidden;
	
		/*定义滚动条高宽及背景
		 高宽分别对应横竖滚动条的尺寸*/
		::-webkit-scrollbar {
			width: 2px;
			height: 5px;
		}
		
		/*定义滚动条轨道
		 内阴影+圆角*/
		::-webkit-scrollbar-track {
			background-color: ${props => (props.dark ? '#001529' : '#ffffff')};
			border-radius: 5px;
		}
		
		/*定义滑块
		 内阴影+圆角*/
		::-webkit-scrollbar-thumb {
			background-color: ${props => (props.dark ? '#1890ff' : '#dddddd')};
			border-radius: 5px;
		}
	
		.ant-menu-root {
			padding-bottom: ${props => (props.collapsed ? '0' : '48px')};
		}
	
	}
}

.ant-layout-header {
	padding-left: 0;
	.trigger {
		font-size: 18px;
		line-height: 40px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
	}
	.trigger:hover {
		color: #1890ff;
		background-color: rgba(16, 142, 233, 0.15);
	}
}

.ant-breadcrumb {
	height: 40px;
	line-height: 40px;
	padding: 0 24px;
}

`
