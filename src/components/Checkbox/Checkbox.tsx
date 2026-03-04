import React from 'react'
import { CheckboxProps } from './interface'
import {
	CheckboxContainer,
	HiddenCheckbox,
	CheckboxVisual,
	Label,
} from './Checkbox.styled'

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, ...props }) => {
	return (
		<CheckboxContainer>
			<HiddenCheckbox checked={checked} {...props} />
			<CheckboxVisual className="checkbox-visual" checked={checked} />
			{label && <Label>{label}</Label>}
		</CheckboxContainer>
	)
}

export default Checkbox
