import styled from 'styled-components'

export const CheckboxContainer = styled.label`
	display: inline-flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
	user-select: none;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 500;
	color: #000;

	&:hover .checkbox-visual {
		box-shadow: -5px 5px 0px 0px #000;
		transform: translate(1px, -1px);
	}
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`

export const CheckboxVisual = styled.span<{ checked?: boolean }>`
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	border: 2px solid #000;
	background: ${({ checked }) => (checked ? '#000' : '#fff')};
	box-shadow: -3px 3px 0px 0px #000;
	transition: all 0.2s ease;

	&::after {
		content: '';
		display: ${({ checked }) => (checked ? 'block' : 'none')};
		width: 6px;
		height: 10px;
		border: solid #fff;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
		margin-bottom: 2px;
	}

	${HiddenCheckbox}:disabled ~ & {
		opacity: 0.5;
		cursor: not-allowed;
	}

	${HiddenCheckbox}:focus ~ & {
		box-shadow: -5px 5px 0px 0px #000;
	}
`

export const Label = styled.span`
	line-height: 1.4;
`
