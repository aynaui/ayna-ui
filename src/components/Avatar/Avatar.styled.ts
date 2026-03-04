import styled, { css } from 'styled-components'

const avatarSizes = {
	small: css`
		width: 32px;
		height: 32px;
		font-size: 12px;
	`,
	medium: css`
		width: 48px;
		height: 48px;
		font-size: 16px;
	`,
	large: css`
		width: 64px;
		height: 64px;
		font-size: 20px;
	`,
	xlarge: css`
		width: 96px;
		height: 96px;
		font-size: 28px;
	`,
}

export const AvatarContainer = styled.div<{
	size?: 'small' | 'medium' | 'large' | 'xlarge'
}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #000;
	background: #fff;
	box-shadow: -3px 3px 0px 0px #000;
	overflow: hidden;
	flex-shrink: 0;

	font-family: 'Source Code Pro', monospace;
	font-weight: 700;
	color: #000;

	${({ size = 'medium' }) => avatarSizes[size]};
`

export const AvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

export const AvatarInitials = styled.span`
	text-transform: uppercase;
	user-select: none;
`
