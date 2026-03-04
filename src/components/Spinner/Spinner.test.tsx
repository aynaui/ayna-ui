import '@testing-library/jest-dom'
import Spinner from './Spinner'
import { render } from '@testing-library/react'

describe(Spinner.name, () => {
	it('renders spinner', () => {
		// Arrange
		const { getByTestId } = render(<Spinner />)

		// Act
		const spinnerContainer = getByTestId('spinner-container')
		const spinnerElement = getByTestId('spinner-element')

		// Assert
		expect(spinnerContainer).toBeInTheDocument()
		expect(spinnerElement).toBeInTheDocument()
	})

	it('renders label when provided', () => {
		// Arrange
		const label = 'Loading...'
		const { getByText } = render(<Spinner label={label} />)

		// Act
		const labelElement = getByText(label)

		// Assert
		expect(labelElement).toBeInTheDocument()
	})

	it('does not render label when not provided', () => {
		// Arrange
		const { queryByText } = render(<Spinner />)

		// Act
		const labelElement = queryByText('Loading...')

		// Assert
		expect(labelElement).not.toBeInTheDocument()
	})

	it('applies small size styling', () => {
		// Arrange
		const { getByTestId } = render(<Spinner size="small" />)

		// Act
		const spinnerElement = getByTestId('spinner-element')

		// Assert
		expect(spinnerElement).toHaveStyle(`
      width: 20px;
      height: 20px;
    `)
	})

	it('applies medium size styling by default', () => {
		// Arrange
		const { getByTestId } = render(<Spinner />)

		// Act
		const spinnerElement = getByTestId('spinner-element')

		// Assert
		expect(spinnerElement).toHaveStyle(`
      width: 32px;
      height: 32px;
    `)
	})

	it('applies large size styling', () => {
		// Arrange
		const { getByTestId } = render(<Spinner size="large" />)

		// Act
		const spinnerElement = getByTestId('spinner-element')

		// Assert
		expect(spinnerElement).toHaveStyle(`
      width: 48px;
      height: 48px;
    `)
	})
})
