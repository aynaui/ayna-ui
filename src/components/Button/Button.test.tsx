import '@testing-library/jest-dom'
import Button from './Button'
import { render, fireEvent } from '@testing-library/react'

describe(Button.name, () => {
	it('renders children correctly', () => {
		// Arrange
		const buttonText = 'Click Me'
		const { getByText } = render(<Button>{buttonText}</Button>)

		// Act
		const buttonElement = getByText(buttonText)

		// Assert
		expect(buttonElement).toBeInTheDocument()
	})

	it('applies the correct size styling', () => {
		// Arrange
		const buttonText = 'Click Me'
		const { getByText } = render(<Button size="large">{buttonText}</Button>)

		// Act
		const buttonElement = getByText(buttonText)

		// Assert
		expect(buttonElement).toHaveStyle(`
      padding: 12px 20px;
      font-size: 16px;
    `)
	})

	it('triggers onClick event', () => {
		// Arrange
		const handleClick = jest.fn()
		const buttonText = 'Click Me'
		const { getByText } = render(
			<Button onClick={handleClick}>{buttonText}</Button>,
		)

		// Act
		const buttonElement = getByText(buttonText)
		fireEvent.click(buttonElement)

		// Assert
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('renders with default medium size if no size prop is provided', () => {
		// Arrange
		const buttonText = 'Default Size Button'
		const { getByText } = render(<Button>{buttonText}</Button>)

		// Act
		const buttonElement = getByText(buttonText)

		// Assert
		expect(buttonElement).toHaveStyle(`
      padding: 8px 16px;
      font-size: 14px;
    `)
	})
})
