import '@testing-library/jest-dom'
import Input from './Input'
import { render, fireEvent } from '@testing-library/react'

describe(Input.name, () => {
	it('renders input correctly', () => {
		// Arrange
		const placeholder = 'Enter text'
		const { getByPlaceholderText } = render(
			<Input placeholder={placeholder} />,
		)

		// Act
		const inputElement = getByPlaceholderText(placeholder)

		// Assert
		expect(inputElement).toBeInTheDocument()
	})

	it('applies error styling when error prop is true', () => {
		// Arrange
		const { getByTestId } = render(
			<Input error data-testid="error-input" />,
		)

		// Act
		const inputElement = getByTestId('error-input')

		// Assert
		expect(inputElement).toHaveStyle('border-color: #dc2626')
	})

	it('applies full width when fullWidth prop is true', () => {
		// Arrange
		const { getByTestId } = render(
			<Input fullWidth data-testid="fullWidth-input" />,
		)

		// Act
		const inputElement = getByTestId('fullWidth-input')

		// Assert
		expect(inputElement).toHaveStyle('width: 100%')
	})

	it('handles onChange event', () => {
		// Arrange
		const handleChange = jest.fn()
		const { getByTestId } = render(
			<Input onChange={handleChange} data-testid="input" />,
		)

		// Act
		const inputElement = getByTestId('input')
		fireEvent.change(inputElement, { target: { value: 'test' } })

		// Assert
		expect(handleChange).toHaveBeenCalledTimes(1)
	})

	it('disables input when disabled prop is true', () => {
		// Arrange
		const { getByTestId } = render(
			<Input disabled data-testid="disabled-input" />,
		)

		// Act
		const inputElement = getByTestId('disabled-input')

		// Assert
		expect(inputElement).toBeDisabled()
	})
})
