import styled from 'styled-components'

export const CardTitle = styled.div`
	position: relative;
	padding-left: 10px;
	&:before {
		content: '';
		width: 2px;
		height: 100%;
		background-color: #f50;
		position: absolute;
		left: 0;
	}
`
