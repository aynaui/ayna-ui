import styled, { css } from 'styled-components'

const buttonSizes = {
	small: css`
		padding: 6px 12px;
		font-size: 12px;
	`,
	medium: css`
		padding: 8px 16px;
		font-size: 14px;
	`,
	large: css`
		padding: 12px 20px;
		font-size: 16px;
	`,
}

export const ButtonComponent = styled.button<{
	size?: 'small' | 'medium' | 'large'
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
	align-self: stretch;
	border: 2px solid #000;
	background: #fff;
	box-shadow: -4px 4px 0px 0px #000;
	cursor: pointer;

	color: #000;
	font-family: 'Source Code Pro', monospace;
	font-style: normal;
	font-weight: 600;
	line-height: 100%;

	${({ size = 'medium' }) => buttonSizes[size]};

	&:hover {
		box-shadow: -6px 6px 0px 0px #000;
		transform: translate(2px, -2px);
	}

	&:active {
		box-shadow: -2px 2px 0px 0px #000;
		transform: translate(-2px, 2px);
	}
`
