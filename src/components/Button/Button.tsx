import React from 'react'
import { ButtonProps } from './interface'
import { ButtonComponent } from './Button.styled'

const Button: React.FC<ButtonProps> = ({
	children,
	size = 'medium',
	...props
}) => {
	return (
		<div>
			<ButtonComponent size={size} {...props}>
				{children}
			</ButtonComponent>
		</div>
	)
}

export default Button
