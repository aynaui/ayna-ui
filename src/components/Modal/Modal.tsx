import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ModalProps } from './interface'
import {
	ModalOverlay,
	ModalContainer,
	ModalHeader,
	ModalTitle,
	CloseButton,
	ModalBody,
	ModalFooter,
} from './Modal.styled'

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
	footer,
	size = 'medium',
	closeOnBackdropClick = true,
	showCloseButton = true,
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [isOpen, onClose])

	if (!isOpen) return null

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (closeOnBackdropClick && e.target === e.currentTarget) {
			onClose()
		}
	}

	return createPortal(
		<ModalOverlay onClick={handleBackdropClick}>
			<ModalContainer size={size} role="dialog" aria-modal="true">
				{(title || showCloseButton) && (
					<ModalHeader>
						{title && <ModalTitle>{title}</ModalTitle>}
						{showCloseButton && (
							<CloseButton
								onClick={onClose}
								aria-label="Close modal"
							>
								×
							</CloseButton>
						)}
					</ModalHeader>
				)}
				<ModalBody>{children}</ModalBody>
				{footer && <ModalFooter>{footer}</ModalFooter>}
			</ModalContainer>
		</ModalOverlay>,
		document.body,
	)
}

export default Modal
