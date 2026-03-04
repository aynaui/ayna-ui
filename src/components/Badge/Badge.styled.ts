import styled, { css } from 'styled-components'

const badgeSizes = {
	small: css`
		padding: 2px 8px;
		font-size: 10px;
	`,
	medium: css`
		padding: 4px 12px;
		font-size: 12px;
	`,
	large: css`
		padding: 6px 16px;
		font-size: 14px;
	`,
}

const badgeVariants = {
	default: css`
		background: #fff;
		color: #000;
		border-color: #000;
		box-shadow: -2px 2px 0px 0px #000;
	`,
	success: css`
		background: #16a34a;
		color: #fff;
		border-color: #166534;
		box-shadow: -2px 2px 0px 0px #166534;
	`,
	warning: css`
		background: #eab308;
		color: #000;
		border-color: #a16207;
		box-shadow: -2px 2px 0px 0px #a16207;
	`,
	danger: css`
		background: #dc2626;
		color: #fff;
		border-color: #991b1b;
		box-shadow: -2px 2px 0px 0px #991b1b;
	`,
	info: css`
		background: #0ea5e9;
		color: #fff;
		border-color: #0369a1;
		box-shadow: -2px 2px 0px 0px #0369a1;
	`,
}

export const BadgeComponent = styled.span<{
	variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
	size?: 'small' | 'medium' | 'large'
}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 2px solid;
	font-family: 'Source Code Pro', monospace;
	font-weight: 600;
	line-height: 1;
	white-space: nowrap;

	${({ size = 'medium' }) => badgeSizes[size]};
	${({ variant = 'default' }) => badgeVariants[variant]};
`
