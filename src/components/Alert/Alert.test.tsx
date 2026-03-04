import '@testing-library/jest-dom'
import Alert from './Alert'
import { render, fireEvent } from '@testing-library/react'

describe(Alert.name, () => {
	it('renders alert with children', () => {
		// Arrange
		const content = 'This is an alert message'
		const { getByText } = render(<Alert>{content}</Alert>)

		// Act
		const alertElement = getByText(content)

		// Assert
		expect(alertElement).toBeInTheDocument()
	})

	it('renders title when provided', () => {
		// Arrange
		const title = 'Alert Title'
		const content = 'Alert content'
		const { getByText } = render(<Alert title={title}>{content}</Alert>)

		// Act
		const titleElement = getByText(title)

		// Assert
		expect(titleElement).toBeInTheDocument()
	})

	it('applies info variant styling by default', () => {
		// Arrange
		const content = 'Info alert'
		const { getByTestId } = render(<Alert>{content}</Alert>)

		// Act
		const alertElement = getByTestId('alert-container')

		// Assert
		expect(alertElement).toHaveStyle('background: #dbeafe')
	})

	it('applies success variant styling', () => {
		// Arrange
		const content = 'Success alert'
		const { getByTestId } = render(
			<Alert variant="success">{content}</Alert>,
		)

		// Act
		const alertElement = getByTestId('alert-container')

		// Assert
		expect(alertElement).toHaveStyle('background: #dcfce7')
	})

	it('applies danger variant styling', () => {
		// Arrange
		const content = 'Danger alert'
		const { getByTestId } = render(
			<Alert variant="danger">{content}</Alert>,
		)

		// Act
		const alertElement = getByTestId('alert-container')

		// Assert
		expect(alertElement).toHaveStyle('background: #fee2e2')
	})

	it('renders close button when onClose is provided', () => {
		// Arrange
		const onClose = jest.fn()
		const content = 'Closable alert'
		const { getByTestId } = render(
			<Alert onClose={onClose}>{content}</Alert>,
		)

		// Act
		const closeButton = getByTestId('alert-close')

		// Assert
		expect(closeButton).toBeInTheDocument()
	})

	it('does not render close button when onClose is not provided', () => {
		// Arrange
		const content = 'Non-closable alert'
		const { queryByTestId } = render(<Alert>{content}</Alert>)

		// Act
		const closeButton = queryByTestId('alert-close')

		// Assert
		expect(closeButton).not.toBeInTheDocument()
	})

	it('calls onClose when close button is clicked', () => {
		// Arrange
		const onClose = jest.fn()
		const content = 'Closable alert'
		const { getByTestId } = render(
			<Alert onClose={onClose}>{content}</Alert>,
		)

		// Act
		const closeButton = getByTestId('alert-close')
		fireEvent.click(closeButton)

		// Assert
		expect(onClose).toHaveBeenCalledTimes(1)
	})
})
