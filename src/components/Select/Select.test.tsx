import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Select from './Select'

const mockOptions = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
]

describe(Select.name, () => {
	it('renders select with placeholder', () => {
		// Arrange
		const placeholder = 'Select an option'
		render(<Select options={mockOptions} placeholder={placeholder} />)

		// Act & Assert
		expect(screen.getByText(placeholder)).toBeInTheDocument()
	})

	it('opens dropdown when clicked', () => {
		// Arrange
		render(<Select options={mockOptions} />)

		// Act
		const button = screen.getByRole('button')
		fireEvent.click(button)

		// Assert
		expect(screen.getByRole('listbox')).toBeInTheDocument()
	})

	it('calls onChange when option is selected', () => {
		// Arrange
		const handleChange = jest.fn()
		render(<Select options={mockOptions} onChange={handleChange} />)

		// Act
		const button = screen.getByRole('button')
		fireEvent.click(button)
		const option = screen.getByText('Option 2')
		fireEvent.click(option)

		// Assert
		expect(handleChange).toHaveBeenCalledWith('2')
	})

	it('displays selected value', () => {
		// Arrange
		const { container } = render(<Select options={mockOptions} value="2" />)

		// Act & Assert
		const button = container.querySelector(
			'button[aria-haspopup="listbox"]',
		)
		expect(button).toHaveTextContent('Option 2')
	})

	it('does not open when disabled', () => {
		// Arrange
		const { container } = render(<Select options={mockOptions} disabled />)

		// Act
		const button = container.querySelector(
			'button[aria-haspopup="listbox"]',
		)
		if (button) {
			fireEvent.click(button)

			// Assert
			const listbox = container.querySelector('[role="listbox"]')
			expect(listbox).not.toBeVisible()
		}
	})

	it('handles keyboard navigation', () => {
		// Arrange
		const { container } = render(<Select options={mockOptions} />)

		// Act
		const button = container.querySelector(
			'button[aria-haspopup="listbox"]',
		)
		if (button) {
			fireEvent.keyDown(button, { key: 'Enter' })

			// Assert
			expect(screen.getByRole('listbox')).toBeInTheDocument()

			// Act
			fireEvent.keyDown(button, { key: 'Escape' })

			// Assert
			const listbox = container.querySelector('[role="listbox"]')
			expect(listbox).not.toBeVisible()
		}
	})

	it('closes dropdown when clicking outside', () => {
		// Arrange
		const { container } = render(
			<div>
				<Select options={mockOptions} />
				<button>Outside</button>
			</div>,
		)

		// Act
		const selectButton = container.querySelector(
			'button[aria-haspopup="listbox"]',
		)
		if (selectButton) {
			fireEvent.click(selectButton)
			expect(screen.getByRole('listbox')).toBeInTheDocument()

			const outsideButton = screen.getByText('Outside')
			fireEvent.mouseDown(outsideButton)

			// Assert
			const listbox = container.querySelector('[role="listbox"]')
			expect(listbox).not.toBeVisible()
		}
	})
})
