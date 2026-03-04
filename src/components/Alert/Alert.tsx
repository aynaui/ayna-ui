import React from 'react'
import { AlertProps } from './interface'
import {
	AlertContainer,
	AlertHeader,
	AlertBody,
	CloseButton,
} from './Alert.styled'

const Alert: React.FC<AlertProps> = ({
	children,
	title,
	variant = 'info',
	onClose,
}) => {
	return (
		<AlertContainer variant={variant} data-testid="alert-container">
			{onClose && (
				<CloseButton
					onClick={onClose}
					aria-label="Close alert"
					data-testid="alert-close"
				>
					×
				</CloseButton>
			)}
			{title && (
				<AlertHeader>
					<h4>{title}</h4>
				</AlertHeader>
			)}
			<AlertBody>{children}</AlertBody>
		</AlertContainer>
	)
}

export default Alert
