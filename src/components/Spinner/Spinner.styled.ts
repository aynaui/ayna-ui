import styled, { css, keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 80%, 100% { 
    transform: translateY(0);
  }
  40% { 
    transform: translateY(-8px);
  }
`

const spinnerSizes = {
	small: css`
		gap: 4px;

		& > div {
			width: 4px;
			height: 4px;
		}
	`,
	medium: css`
		gap: 6px;

		& > div {
			width: 6px;
			height: 6px;
		}
	`,
	large: css`
		gap: 8px;

		& > div {
			width: 8px;
			height: 8px;
		}
	`,
}

const spinnerVariants = {
	primary: css`
		& > div {
			background: #3b82f6;
			border-color: #1e40af;
		}
	`,
	secondary: css`
		& > div {
			background: #000;
			border-color: #000;
		}
	`,
	danger: css`
		& > div {
			background: #ef4444;
			border-color: #991b1b;
		}
	`,
	success: css`
		& > div {
			background: #22c55e;
			border-color: #166534;
		}
	`,
}

export const SpinnerContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
`

export const SpinnerElement = styled.div<{
	size?: 'small' | 'medium' | 'large'
	variant?: 'primary' | 'secondary' | 'danger' | 'success'
}>`
	display: flex;
	align-items: center;

	& > div {
		border: 2px solid;
		animation: ${bounce} 1.2s ease-in-out infinite;
	}

	& > div:nth-child(2) {
		animation-delay: 0.2s;
	}

	& > div:nth-child(3) {
		animation-delay: 0.4s;
	}

	${({ size = 'medium' }) => spinnerSizes[size]};
	${({ variant = 'primary' }) => spinnerVariants[variant]};
`

export const SpinnerLabel = styled.span`
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 500;
	color: #000;
`
