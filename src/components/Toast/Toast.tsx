import React, { useEffect } from 'react'
import { ToastProps, ToastContainerProps } from './interface'
import { ToastElement, ToastMessage, ToastCloseButton } from './Toast.styled'

const Toast: React.FC<
	ToastProps & { position?: ToastContainerProps['position'] }
> = ({
	message,
	variant = 'info',
	duration = 5000,
	isVisible,
	onClose,
	position = 'top-right',
}) => {
	useEffect(() => {
		if (isVisible && duration > 0) {
			const timer = setTimeout(() => {
				onClose()
			}, duration)

			return () => clearTimeout(timer)
		}
		return undefined
	}, [isVisible, duration, onClose])

	if (!isVisible) return null

	return (
		<ToastElement
			variant={variant}
			isVisible={isVisible}
			position={position}
			role="alert"
			aria-live="polite"
		>
			<ToastMessage>{message}</ToastMessage>
			<ToastCloseButton onClick={onClose} aria-label="Close toast">
				×
			</ToastCloseButton>
		</ToastElement>
	)
}

export default Toast
