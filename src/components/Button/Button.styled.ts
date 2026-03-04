import styled, { css } from 'styled-components'

const buttonSizes = {
	small: css`
		padding: 6px 12px;
		font-size: 12px;
	`,
	medium: css`
		padding: 8px 16px;
		font-size: 14px;
	`,
	large: css`
		padding: 12px 20px;
		font-size: 16px;
	`,
}

const buttonVariants = {
	primary: css`
		background: #000;
		color: #fff;
		border-color: #000;
		box-shadow: -4px 4px 0px 0px #000;

		&:hover {
			box-shadow: -6px 6px 0px 0px #000;
		}

		&:active {
			box-shadow: -2px 2px 0px 0px #000;
		}
	`,
	secondary: css`
		background: #fff;
		color: #000;
		border-color: #000;
		box-shadow: -4px 4px 0px 0px #000;

		&:hover {
			box-shadow: -6px 6px 0px 0px #000;
		}

		&:active {
			box-shadow: -2px 2px 0px 0px #000;
		}
	`,
	outline: css`
		background: transparent;
		color: #000;
		border-color: #000;
		box-shadow: -4px 4px 0px 0px #000;

		&:hover {
			background: #000;
			color: #fff;
			box-shadow: -6px 6px 0px 0px #000;
		}

		&:active {
			box-shadow: -2px 2px 0px 0px #000;
		}
	`,
	danger: css`
		background: #dc2626;
		color: #fff;
		border-color: #991b1b;
		box-shadow: -4px 4px 0px 0px #991b1b;

		&:hover {
			box-shadow: -6px 6px 0px 0px #991b1b;
		}

		&:active {
			box-shadow: -2px 2px 0px 0px #991b1b;
		}
	`,
	success: css`
		background: #16a34a;
		color: #fff;
		border-color: #166534;
		box-shadow: -4px 4px 0px 0px #166534;

		&:hover {
			box-shadow: -6px 6px 0px 0px #166534;
		}

		&:active {
			box-shadow: -2px 2px 0px 0px #166534;
		}
	`,
}

export const ButtonComponent = styled.button<{
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success'
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex: 1 0 0;
	align-self: stretch;
	border: 2px solid #000;
	cursor: pointer;
	transition: all 0.2s ease;

	font-family: 'Source Code Pro', monospace;
	font-style: normal;
	font-weight: 600;
	line-height: 100%;

	${({ size = 'medium' }) => buttonSizes[size]};
	${({ variant = 'secondary' }) => buttonVariants[variant]};

	&:hover {
		transform: translate(2px, -2px);
	}

	&:active {
		transform: translate(-2px, 2px);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;

		&:hover {
			transform: none;
		}
	}
`
