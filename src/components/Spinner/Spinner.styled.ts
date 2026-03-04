import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const spinnerSizes = {
	small: css`
		width: 20px;
		height: 20px;
		border-width: 2px;
	`,
	medium: css`
		width: 32px;
		height: 32px;
		border-width: 3px;
	`,
	large: css`
		width: 48px;
		height: 48px;
		border-width: 4px;
	`,
}

export const SpinnerContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`

export const SpinnerElement = styled.div<{
	size?: 'small' | 'medium' | 'large'
}>`
	border: solid #000;
	border-top-color: transparent;
	border-radius: 50%;
	animation: ${spin} 0.8s linear infinite;

	${({ size = 'medium' }) => spinnerSizes[size]};
`

export const SpinnerLabel = styled.span`
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 500;
	color: #000;
`
