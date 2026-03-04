import styled, { css } from 'styled-components'

const alertVariants = {
	info: css`
		background: #dbeafe;
		border-color: #0369a1;
		box-shadow: -4px 4px 0px 0px #0369a1;

		h4 {
			color: #0c4a6e;
		}

		p {
			color: #075985;
		}
	`,
	success: css`
		background: #dcfce7;
		border-color: #166534;
		box-shadow: -4px 4px 0px 0px #166534;

		h4 {
			color: #14532d;
		}

		p {
			color: #15803d;
		}
	`,
	warning: css`
		background: #fef3c7;
		border-color: #a16207;
		box-shadow: -4px 4px 0px 0px #a16207;

		h4 {
			color: #78350f;
		}

		p {
			color: #a16207;
		}
	`,
	danger: css`
		background: #fee2e2;
		border-color: #991b1b;
		box-shadow: -4px 4px 0px 0px #991b1b;

		h4 {
			color: #7f1d1d;
		}

		p {
			color: #b91c1c;
		}
	`,
}

export const AlertContainer = styled.div<{
	variant?: 'info' | 'success' | 'warning' | 'danger'
}>`
	position: relative;
	padding: 16px 20px;
	border: 2px solid;
	font-family: 'Source Code Pro', monospace;

	${({ variant = 'info' }) => alertVariants[variant]};
`

export const AlertHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;

	h4 {
		margin: 0;
		font-size: 16px;
		font-weight: 700;
		line-height: 1.2;
	}
`

export const AlertBody = styled.div`
	p {
		margin: 0;
		font-size: 14px;
		line-height: 1.5;
	}
`

export const CloseButton = styled.button`
	position: absolute;
	top: 12px;
	right: 12px;
	background: transparent;
	border: 2px solid currentColor;
	width: 24px;
	height: 24px;
	padding: 0;
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	line-height: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;

	&:hover {
		transform: rotate(90deg);
	}

	&:active {
		transform: rotate(90deg) scale(0.9);
	}
`
