import styled, { css } from 'styled-components'

const inputVariants = {
	default: css`
		background: #fff;
		border: 2px solid #000;
		box-shadow: -4px 4px 0px 0px #000;

		&:focus {
			box-shadow: -6px 6px 0px 0px #000;
			transform: translate(2px, -2px);
		}
	`,
	filled: css`
		background: #f3f4f6;
		border: 2px solid #000;
		box-shadow: -4px 4px 0px 0px #000;

		&:focus {
			background: #fff;
			box-shadow: -6px 6px 0px 0px #000;
			transform: translate(2px, -2px);
		}
	`,
	flushed: css`
		background: transparent;
		border: none;
		border-bottom: 2px solid #000;
		box-shadow: none;
		border-radius: 0;

		&:focus {
			border-bottom: 3px solid #000;
			box-shadow: none;
			transform: none;
		}
	`,
}

export const InputComponent = styled.input<{
	error?: boolean
	fullWidth?: boolean
	variant?: 'default' | 'filled' | 'flushed'
}>`
	padding: 12px 16px;
	outline: none;
	transition: all 0.2s ease;

	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 500;
	color: #000;

	${({ variant = 'default' }) => inputVariants[variant]};

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ error, variant = 'default' }) =>
		error &&
		variant !== 'flushed' &&
		css`
			border-color: #dc2626;
			box-shadow: -4px 4px 0px 0px #dc2626;

			&:focus {
				box-shadow: -6px 6px 0px 0px #dc2626;
			}
		`}

	${({ error, variant }) =>
		error &&
		variant === 'flushed' &&
		css`
			border-bottom-color: #dc2626;

			&:focus {
				border-bottom-color: #dc2626;
			}
		`}

	&:disabled {
		background: #f3f4f6;
		cursor: not-allowed;
		opacity: 0.6;
	}

	&::placeholder {
		color: #6b7280;
	}
`
