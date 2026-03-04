import '@testing-library/jest-dom'
import Avatar from './Avatar'
import { render } from '@testing-library/react'

describe(Avatar.name, () => {
	it('renders avatar container', () => {
		// Arrange
		const { getByTestId } = render(<Avatar />)

		// Act
		const avatarElement = getByTestId('avatar-container')

		// Assert
		expect(avatarElement).toBeInTheDocument()
	})

	it('renders image when src is provided', () => {
		// Arrange
		const src = 'https://example.com/avatar.jpg'
		const alt = 'User Avatar'
		const { getByAltText } = render(<Avatar src={src} alt={alt} />)

		// Act
		const imageElement = getByAltText(alt)

		// Assert
		expect(imageElement).toBeInTheDocument()
		expect(imageElement).toHaveAttribute('src', src)
	})

	it('renders initials when name is provided without src', () => {
		// Arrange
		const name = 'John Doe'
		const { getByText } = render(<Avatar name={name} />)

		// Act
		const initialsElement = getByText('JD')

		// Assert
		expect(initialsElement).toBeInTheDocument()
	})

	it('renders single initial for single name', () => {
		// Arrange
		const name = 'John'
		const { getByText } = render(<Avatar name={name} />)

		// Act
		const initialsElement = getByText('J')

		// Assert
		expect(initialsElement).toBeInTheDocument()
	})

	it('renders question mark when no name or src provided', () => {
		// Arrange
		const { getByText } = render(<Avatar />)

		// Act
		const questionMark = getByText('?')

		// Assert
		expect(questionMark).toBeInTheDocument()
	})

	it('applies small size styling', () => {
		// Arrange
		const { getByTestId } = render(<Avatar size="small" />)

		// Act
		const avatarElement = getByTestId('avatar-container')

		// Assert
		expect(avatarElement).toHaveStyle(`
      width: 32px;
      height: 32px;
    `)
	})

	it('applies large size styling', () => {
		// Arrange
		const { getByTestId } = render(<Avatar size="large" />)

		// Act
		const avatarElement = getByTestId('avatar-container')

		// Assert
		expect(avatarElement).toHaveStyle(`
      width: 64px;
      height: 64px;
    `)
	})
})
