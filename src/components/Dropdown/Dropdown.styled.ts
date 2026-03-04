import styled, { css, keyframes } from 'styled-components'

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const DropdownWrapper = styled.div`
	position: relative;
	display: inline-block;
`

export const DropdownTrigger = styled.div<{ disabled?: boolean }>`
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

const getPositionStyles = (
	position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right',
) => {
	switch (position) {
		case 'bottom-left':
			return css`
				top: 100%;
				left: 0;
				margin-top: 8px;
			`
		case 'bottom-right':
			return css`
				top: 100%;
				right: 0;
				margin-top: 8px;
			`
		case 'top-left':
			return css`
				bottom: 100%;
				left: 0;
				margin-bottom: 8px;
			`
		case 'top-right':
			return css`
				bottom: 100%;
				right: 0;
				margin-bottom: 8px;
			`
	}
}

export const DropdownMenu = styled.div<{
	isOpen: boolean
	position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
}>`
	position: absolute;
	min-width: 200px;
	background: #fff;
	border: 2px solid #000;
	box-shadow: -4px 4px 0px 0px #000;
	z-index: 1000;
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	animation: ${({ position }) =>
			position.startsWith('top') ? slideUp : slideDown}
		0.2s ease;
	overflow: hidden;

	${({ position }) => getPositionStyles(position)}
`

export const DropdownItem = styled.div<{ disabled?: boolean }>`
	padding: 12px 16px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	display: flex;
	align-items: center;
	gap: 8px;
	border-bottom: 2px solid #000;
	position: relative;

	&:last-child {
		border-bottom: none;
	}

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
			background: #f3f4f6;
		`}

	${({ disabled }) =>
		!disabled &&
		css`
			&:hover {
				background: #fef3c7;
				padding-left: 20px;
				padding-right: 12px;
				border-left: 4px solid #000;
			}

			&:active {
				background: #000;
				color: #fff;
				box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);
			}
		`}
`

export const DropdownDivider = styled.div`
	height: 2px;
	background: #000;
	margin: 0;
`

export const DropdownIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 16px;
`
