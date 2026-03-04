import styled, { css, keyframes } from 'styled-components'
import { ToastVariant } from './interface'

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const toastVariants: Record<
	ToastVariant,
	{ background: string; border: string; shadow: string }
> = {
	success: {
		background: '#dcfce7',
		border: '#16a34a',
		shadow: '#16a34a',
	},
	error: {
		background: '#fee2e2',
		border: '#dc2626',
		shadow: '#dc2626',
	},
	warning: {
		background: '#fef3c7',
		border: '#d97706',
		shadow: '#d97706',
	},
	info: {
		background: '#dbeafe',
		border: '#2563eb',
		shadow: '#2563eb',
	},
}

export const ToastContainer = styled.div<{
	position:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right'
}>`
	position: fixed;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	gap: 12px;
	pointer-events: none;

	${({ position }) => {
		switch (position) {
			case 'top-left':
				return css`
					top: 24px;
					left: 24px;
				`
			case 'top-center':
				return css`
					top: 24px;
					left: 50%;
					transform: translateX(-50%);
				`
			case 'top-right':
				return css`
					top: 24px;
					right: 24px;
				`
			case 'bottom-left':
				return css`
					bottom: 24px;
					left: 24px;
				`
			case 'bottom-center':
				return css`
					bottom: 24px;
					left: 50%;
					transform: translateX(-50%);
				`
			case 'bottom-right':
				return css`
					bottom: 24px;
					right: 24px;
				`
		}
	}}
`

export const ToastElement = styled.div<{
	variant: ToastVariant
	isVisible: boolean
	position:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right'
}>`
	min-width: 300px;
	max-width: 500px;
	padding: 16px 20px;
	border: 2px solid ${({ variant }) => toastVariants[variant].border};
	background: ${({ variant }) => toastVariants[variant].background};
	box-shadow: -4px 4px 0px 0px
		${({ variant }) => toastVariants[variant].shadow};
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 500;
	color: #000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	pointer-events: all;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
	transition: opacity 0.3s ease;

	animation: ${({ position }) => {
			if (position.includes('right')) return slideInRight
			if (position.includes('left')) return slideInLeft
			return slideInTop
		}}
		0.3s ease;
`

export const ToastMessage = styled.div`
	flex: 1;
	line-height: 1.5;
`

export const ToastCloseButton = styled.button`
	background: none;
	border: none;
	font-size: 20px;
	line-height: 1;
	cursor: pointer;
	padding: 0;
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	transition: transform 0.2s ease;
	flex-shrink: 0;

	&:hover {
		transform: rotate(90deg);
	}

	&:focus {
		outline: 2px solid #000;
		outline-offset: 2px;
	}
`
