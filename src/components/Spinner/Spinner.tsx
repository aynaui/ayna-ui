import React from 'react'
import { SpinnerProps } from './interface'
import {
	SpinnerContainer,
	SpinnerElement,
	SpinnerLabel,
} from './Spinner.styled'

const Spinner: React.FC<SpinnerProps> = ({
	size = 'medium',
	variant = 'primary',
	label,
}) => {
	return (
		<SpinnerContainer data-testid="spinner-container">
			<SpinnerElement
				size={size}
				variant={variant}
				data-testid="spinner-element"
			>
				<div />
				<div />
				<div />
			</SpinnerElement>
			{label && <SpinnerLabel>{label}</SpinnerLabel>}
		</SpinnerContainer>
	)
}

export default Spinner
