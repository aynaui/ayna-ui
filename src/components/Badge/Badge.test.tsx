import '@testing-library/jest-dom'
import Badge from './Badge'
import { render } from '@testing-library/react'

describe(Badge.name, () => {
	it('renders children correctly', () => {
		// Arrange
		const badgeText = 'New'
		const { getByText } = render(<Badge>{badgeText}</Badge>)

		// Act
		const badgeElement = getByText(badgeText)

		// Assert
		expect(badgeElement).toBeInTheDocument()
	})

	it('applies default variant styling', () => {
		// Arrange
		const badgeText = 'Default'
		const { getByText } = render(<Badge>{badgeText}</Badge>)

		// Act
		const badgeElement = getByText(badgeText)

		// Assert
		expect(badgeElement).toHaveStyle(`
      background: #fff;
      color: #000;
    `)
	})

	it('applies success variant styling', () => {
		// Arrange
		const badgeText = 'Success'
		const { getByText } = render(
			<Badge variant="success">{badgeText}</Badge>,
		)

		// Act
		const badgeElement = getByText(badgeText)

		// Assert
		expect(badgeElement).toHaveStyle(`
      background: #16a34a;
      color: #fff;
    `)
	})

	it('applies danger variant styling', () => {
		// Arrange
		const badgeText = 'Danger'
		const { getByText } = render(
			<Badge variant="danger">{badgeText}</Badge>,
		)

		// Act
		const badgeElement = getByText(badgeText)

		// Assert
		expect(badgeElement).toHaveStyle(`
      background: #dc2626;
      color: #fff;
    `)
	})

	it('applies small size styling', () => {
		// Arrange
		const badgeText = 'Small'
		const { getByText } = render(<Badge size="small">{badgeText}</Badge>)

		// Act
		const badgeElement = getByText(badgeText)

		// Assert
		expect(badgeElement).toHaveStyle(`
      padding: 2px 8px;
      font-size: 10px;
    `)
	})

	it('applies large size styling', () => {
		// Arrange
		const badgeText = 'Large'
		const { getByText } = render(<Badge size="large">{badgeText}</Badge>)

		// Act
		const badgeElement = getByText(badgeText)

		// Assert
		expect(badgeElement).toHaveStyle(`
      padding: 6px 16px;
      font-size: 14px;
    `)
	})
})
