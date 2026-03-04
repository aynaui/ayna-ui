import React from 'react'
import { ButtonProps } from './interface'
import { ButtonComponent } from './Button.styled'

const Button: React.FC<ButtonProps> = ({
	children,
	size = 'medium',
	variant = 'secondary',
	...props
}) => {
	return (
		<ButtonComponent $size={size} $variant={variant} {...props}>
			{children}
		</ButtonComponent>
	)
}

export default Button
