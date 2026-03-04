import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const TooltipWrapper = styled.div`
	position: relative;
	display: inline-block;
`

const getPositionStyles = (position: 'top' | 'bottom' | 'left' | 'right') => {
	switch (position) {
		case 'top':
			return css`
				bottom: 100%;
				left: 50%;
				transform: translateX(-50%);
				margin-bottom: 8px;
			`
		case 'bottom':
			return css`
				top: 100%;
				left: 50%;
				transform: translateX(-50%);
				margin-top: 8px;
			`
		case 'left':
			return css`
				right: 100%;
				top: 50%;
				transform: translateY(-50%);
				margin-right: 8px;
			`
		case 'right':
			return css`
				left: 100%;
				top: 50%;
				transform: translateY(-50%);
				margin-left: 8px;
			`
	}
}

const getArrowStyles = (position: 'top' | 'bottom' | 'left' | 'right') => {
	const arrowSize = 6
	switch (position) {
		case 'top':
			return css`
				top: 100%;
				left: 50%;
				transform: translateX(-50%);
				border-left: ${arrowSize}px solid transparent;
				border-right: ${arrowSize}px solid transparent;
				border-top: ${arrowSize}px solid #000;
			`
		case 'bottom':
			return css`
				bottom: 100%;
				left: 50%;
				transform: translateX(-50%);
				border-left: ${arrowSize}px solid transparent;
				border-right: ${arrowSize}px solid transparent;
				border-bottom: ${arrowSize}px solid #000;
			`
		case 'left':
			return css`
				left: 100%;
				top: 50%;
				transform: translateY(-50%);
				border-top: ${arrowSize}px solid transparent;
				border-bottom: ${arrowSize}px solid transparent;
				border-left: ${arrowSize}px solid #000;
			`
		case 'right':
			return css`
				right: 100%;
				top: 50%;
				transform: translateY(-50%);
				border-top: ${arrowSize}px solid transparent;
				border-bottom: ${arrowSize}px solid transparent;
				border-right: ${arrowSize}px solid #000;
			`
	}
}

export const TooltipContent = styled.div<{
	isVisible: boolean
	position: 'top' | 'bottom' | 'left' | 'right'
}>`
	position: absolute;
	background: #000;
	color: #fff;
	padding: 8px 12px;
	border: 2px solid #000;
	box-shadow: -4px 4px 0px 0px #000;
	font-family: 'Source Code Pro', monospace;
	font-size: 12px;
	font-weight: 500;
	white-space: nowrap;
	z-index: 1000;
	pointer-events: none;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
	animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 0.2s ease;
	transition:
		opacity 0.2s ease,
		visibility 0.2s ease;

	${({ position }) => getPositionStyles(position)}

	&::after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		${({ position }) => getArrowStyles(position)}
	}
`
