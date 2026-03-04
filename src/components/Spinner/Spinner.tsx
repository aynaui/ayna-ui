import React from 'react'
import { SpinnerProps } from './interface'
import {
	SpinnerContainer,
	SpinnerElement,
	SpinnerLabel,
} from './Spinner.styled'

const Spinner: React.FC<SpinnerProps> = ({ size = 'medium', label }) => {
	return (
		<SpinnerContainer data-testid="spinner-container">
			<SpinnerElement size={size} data-testid="spinner-element" />
			{label && <SpinnerLabel>{label}</SpinnerLabel>}
		</SpinnerContainer>
	)
}

export default Spinner
