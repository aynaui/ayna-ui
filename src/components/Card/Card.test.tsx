import '@testing-library/jest-dom'
import Card from './Card'
import { render } from '@testing-library/react'

describe(Card.name, () => {
	it('renders card with children', () => {
		// Arrange
		const content = 'Card content'
		const { getByText, getByTestId } = render(<Card>{content}</Card>)

		// Act
		const cardElement = getByTestId('card-container')
		const contentElement = getByText(content)

		// Assert
		expect(cardElement).toBeInTheDocument()
		expect(contentElement).toBeInTheDocument()
	})

	it('renders title when provided', () => {
		// Arrange
		const title = 'Card Title'
		const { getByText, getByTestId } = render(
			<Card title={title}>Content</Card>,
		)

		// Act
		const titleElement = getByText(title)
		const headerElement = getByTestId('card-header')

		// Assert
		expect(titleElement).toBeInTheDocument()
		expect(headerElement).toBeInTheDocument()
	})

	it('does not render header when title is not provided', () => {
		// Arrange
		const { queryByTestId } = render(<Card>Content</Card>)

		// Act
		const headerElement = queryByTestId('card-header')

		// Assert
		expect(headerElement).not.toBeInTheDocument()
	})

	it('renders footer when provided', () => {
		// Arrange
		const footer = 'Card Footer'
		const { getByText, getByTestId } = render(
			<Card footer={footer}>Content</Card>,
		)

		// Act
		const footerElement = getByText(footer)
		const footerContainer = getByTestId('card-footer')

		// Assert
		expect(footerElement).toBeInTheDocument()
		expect(footerContainer).toBeInTheDocument()
	})

	it('does not render footer when not provided', () => {
		// Arrange
		const { queryByTestId } = render(<Card>Content</Card>)

		// Act
		const footerElement = queryByTestId('card-footer')

		// Assert
		expect(footerElement).not.toBeInTheDocument()
	})

	it('renders complete card with title, content, and footer', () => {
		// Arrange
		const title = 'Card Title'
		const content = 'Card Content'
		const footer = 'Card Footer'
		const { getByText } = render(
			<Card title={title} footer={footer}>
				{content}
			</Card>,
		)

		// Act & Assert
		expect(getByText(title)).toBeInTheDocument()
		expect(getByText(content)).toBeInTheDocument()
		expect(getByText(footer)).toBeInTheDocument()
	})
})
