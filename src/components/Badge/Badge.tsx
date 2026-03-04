import React from 'react'
import { BadgeProps } from './interface'
import { BadgeComponent } from './Badge.styled'

const Badge: React.FC<BadgeProps> = ({
	children,
	variant = 'default',
	size = 'medium',
}) => {
	return (
		<BadgeComponent variant={variant} size={size}>
			{children}
		</BadgeComponent>
	)
}

export default Badge
