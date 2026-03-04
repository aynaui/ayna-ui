import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translate(-50%, -48%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	animation: ${fadeIn} 0.2s ease;
`

const modalSizes = {
	small: '400px',
	medium: '600px',
	large: '800px',
}

export const ModalContainer = styled.div<{
	size: 'small' | 'medium' | 'large'
}>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	border: 2px solid #000;
	box-shadow: -8px 8px 0px 0px #000;
	max-height: 90vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	animation: ${slideIn} 0.3s ease;
	z-index: 1001;

	${({ size }) => css`
		width: 90%;
		max-width: ${modalSizes[size]};
	`}
`

export const ModalHeader = styled.div`
	padding: 20px 24px;
	border-bottom: 2px solid #000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
`

export const ModalTitle = styled.h2`
	font-family: 'Source Code Pro', monospace;
	font-size: 20px;
	font-weight: 700;
	margin: 0;
	color: #000;
`

export const CloseButton = styled.button`
	background: none;
	border: none;
	font-size: 24px;
	line-height: 1;
	cursor: pointer;
	padding: 0;
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000;
	transition: transform 0.2s ease;

	&:hover {
		transform: rotate(90deg);
	}

	&:focus {
		outline: 2px solid #000;
		outline-offset: 2px;
	}
`

export const ModalBody = styled.div`
	padding: 24px;
	overflow-y: auto;
	flex: 1;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	line-height: 1.6;
	color: #000;
`

export const ModalFooter = styled.div`
	padding: 20px 24px;
	border-top: 2px solid #000;
	display: flex;
	gap: 12px;
	justify-content: flex-end;
	background: #fff;
`
