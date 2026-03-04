import styled from 'styled-components'

export const CardContainer = styled.div`
	border: 2px solid #000;
	background: #fff;
	box-shadow: -6px 6px 0px 0px #000;
	overflow: hidden;
	transition: all 0.2s ease;

	&:hover {
		box-shadow: -8px 8px 0px 0px #000;
		transform: translate(2px, -2px);
	}
`

export const CardHeader = styled.div`
	padding: 16px 20px;
	border-bottom: 2px solid #000;
	background: #fff;

	h3 {
		margin: 0;
		font-family: 'Source Code Pro', monospace;
		font-size: 18px;
		font-weight: 700;
		color: #000;
	}
`

export const CardBody = styled.div`
	padding: 20px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	color: #000;
	line-height: 1.6;
`

export const CardFooter = styled.div`
	padding: 16px 20px;
	border-top: 2px solid #000;
	background: #f9fafb;
	font-family: 'Source Code Pro', monospace;
	font-size: 12px;
	color: #6b7280;
`
