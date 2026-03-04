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

export const SelectWrapper = styled.div<{ fullWidth?: boolean }>`
	position: relative;
	display: inline-block;

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}
`

export const SelectButton = styled.button<{
	fullWidth?: boolean
	isOpen?: boolean
	disabled?: boolean
	error?: boolean
}>`
	padding: 12px 40px 12px 16px;
	border: 2px solid #000;
	background: #fff;
	box-shadow: -4px 4px 0px 0px #000;
	outline: none;
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	text-align: left;

	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 500;
	color: #000;

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ isOpen }) =>
		isOpen &&
		css`
			box-shadow: -6px 6px 0px 0px #000;
			transform: translate(2px, -2px);
			background: #fef3c7;
		`}

	${({ disabled }) =>
		disabled &&
		css`
			background: #f3f4f6;
			cursor: not-allowed;
			opacity: 0.6;
		`}

	${({ error }) =>
		error &&
		css`
			border-color: #dc2626;
			box-shadow: -4px 4px 0px 0px #dc2626;

			&:hover:not(:disabled) {
				box-shadow: -6px 6px 0px 0px #dc2626;
				background: #fee2e2;
			}

			&:focus {
				box-shadow: -6px 6px 0px 0px #dc2626;
			}
		`}

	&:hover:not(:disabled) {
		box-shadow: -6px 6px 0px 0px #000;
		transform: translate(2px, -2px);
		background: #fef3c7;
	}

	&:focus {
		box-shadow: -6px 6px 0px 0px #000;
		transform: translate(2px, -2px);
	}

	&:active:not(:disabled) {
		box-shadow: -2px 2px 0px 0px #000;
		transform: translate(-2px, 2px);
	}
`

export const SelectArrow = styled.div<{ isOpen?: boolean }>`
	position: absolute;
	right: 16px;
	top: 50%;
	transform: translateY(-50%)
		${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #000;
	pointer-events: none;
	transition: transform 0.2s ease;
`

export const SelectDropdown = styled.div<{
	isOpen?: boolean
	openUpward?: boolean
}>`
	position: absolute;
	${({ openUpward }) =>
		openUpward
			? css`
					bottom: 100%;
					margin-bottom: 8px;
				`
			: css`
					top: 100%;
					margin-top: 8px;
				`}
	left: 0;
	right: 0;
	background: #fff;
	border: 2px solid #000;
	box-shadow: -4px 4px 0px 0px #000;
	max-height: 250px;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 100;
	display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
	animation: ${({ openUpward }) => (openUpward ? slideUp : slideDown)} 0.2s
		ease;
`

export const SelectOption = styled.div<{
	isSelected?: boolean
	disabled?: boolean
}>`
	padding: 12px 16px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	cursor: pointer;
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	border-bottom: 2px solid #000;
	position: relative;

	&:last-child {
		border-bottom: none;
	}

	${({ isSelected }) =>
		isSelected &&
		css`
			background: #000;
			color: #fff;
			font-weight: 700;
			box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.3);

			&::before {
				content: '▶';
				position: absolute;
				left: 4px;
				font-size: 8px;
			}
		`}

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
			cursor: not-allowed;
			background: #f3f4f6;
		`}

	${({ disabled, isSelected }) =>
		!disabled &&
		!isSelected &&
		css`
			&:hover {
				background: #fef3c7;
				padding-left: 20px;
				padding-right: 12px;
				border-left: 4px solid #000;
			}

			&:active {
				background: #fde047;
			}
		`}
`

export const Placeholder = styled.span`
	color: #9ca3af;
`
