import '@testing-library/jest-dom'
import Checkbox from './Checkbox'
import { render, fireEvent } from '@testing-library/react'

describe(Checkbox.name, () => {
	it('renders checkbox correctly', () => {
		// Arrange
		const { container } = render(<Checkbox />)

		// Act
		const checkbox = container.querySelector('input[type="checkbox"]')

		// Assert
		expect(checkbox).toBeInTheDocument()
	})

	it('renders checkbox with label', () => {
		// Arrange
		const label = 'Accept terms'
		const { getByText } = render(<Checkbox label={label} />)

		// Act
		const labelElement = getByText(label)

		// Assert
		expect(labelElement).toBeInTheDocument()
	})

	it('renders checked checkbox', () => {
		// Arrange
		const { container } = render(<Checkbox checked />)

		// Act
		const checkbox = container.querySelector(
			'input[type="checkbox"]',
		) as HTMLInputElement

		// Assert
		expect(checkbox.checked).toBe(true)
	})

	it('renders unchecked checkbox', () => {
		// Arrange
		const { container } = render(<Checkbox checked={false} />)

		// Act
		const checkbox = container.querySelector(
			'input[type="checkbox"]',
		) as HTMLInputElement

		// Assert
		expect(checkbox.checked).toBe(false)
	})

	it('handles onChange event', () => {
		// Arrange
		const handleChange = jest.fn()
		const { container } = render(<Checkbox onChange={handleChange} />)

		// Act
		const checkbox = container.querySelector(
			'input[type="checkbox"]',
		) as HTMLInputElement
		fireEvent.click(checkbox)

		// Assert
		expect(handleChange).toHaveBeenCalledTimes(1)
	})

	it('disables checkbox when disabled prop is true', () => {
		// Arrange
		const { container } = render(<Checkbox disabled />)

		// Act
		const checkbox = container.querySelector(
			'input[type="checkbox"]',
		) as HTMLInputElement

		// Assert
		expect(checkbox).toBeDisabled()
	})

	it('toggles checkbox on label click', () => {
		// Arrange
		const handleChange = jest.fn()
		const label = 'Click me'
		const { getByText } = render(
			<Checkbox label={label} onChange={handleChange} />,
		)

		// Act
		const labelElement = getByText(label)
		fireEvent.click(labelElement)

		// Assert
		expect(handleChange).toHaveBeenCalledTimes(1)
	})
})
