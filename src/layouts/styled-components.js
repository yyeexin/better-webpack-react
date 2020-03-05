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
		margin-left: 10px;
		color: ${props => (props.dark ? '#ffffff' : '#000000')};
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
	overflow: hidden;
	background-color: ${props => (props.dark ? '#002140' : '#ffffff')};
	color: ${props => (props.dark ? '#ffffff' : '#000000')};
`
export const GlobalMenuStyle = createGlobalStyle`
::-webkit-scrollbar {
	width: 2px;
}

::-webkit-scrollbar-track {
    background-color:  ${props => (props.dark ? '#001529' : '#ffffff')};
}

::-webkit-scrollbar-thumb {
	background-color:  ${props => (props.dark ? '#1890ff' : '#dddddd')};
}
`
