import React from 'react'
import { InputProps } from './interface'
import { InputComponent } from './Input.styled'

const Input: React.FC<InputProps> = ({
	error = false,
	fullWidth = false,
	variant = 'default',
	...props
}) => {
	return (
		<InputComponent
			error={error}
			fullWidth={fullWidth}
			variant={variant}
			{...props}
		/>
	)
}

export default Input
