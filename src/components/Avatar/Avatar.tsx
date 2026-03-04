import React from 'react'
import { AvatarProps } from './interface'
import { AvatarContainer, AvatarImage, AvatarInitials } from './Avatar.styled'

const Avatar: React.FC<AvatarProps> = ({ src, alt, name, size = 'medium' }) => {
	const getInitials = (name: string) => {
		const parts = name.trim().split(' ').filter(Boolean)
		if (parts.length >= 2) {
			const firstInitial = parts[0]?.[0]
			const lastInitial = parts[parts.length - 1]?.[0]
			if (firstInitial && lastInitial) {
				return `${firstInitial}${lastInitial}`
			}
		}
		return parts[0]?.[0] || '?'
	}

	return (
		<AvatarContainer size={size} data-testid="avatar-container">
			{src ? (
				<AvatarImage src={src} alt={alt || name || 'Avatar'} />
			) : (
				<AvatarInitials>
					{name ? getInitials(name) : '?'}
				</AvatarInitials>
			)}
		</AvatarContainer>
	)
}

export default Avatar
