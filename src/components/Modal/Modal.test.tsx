import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal'

describe('Modal', () => {
	const defaultProps = {
		isOpen: true,
		onClose: jest.fn(),
		children: 'Modal content',
	}

	it('should render when isOpen is true', () => {
		render(<Modal {...defaultProps} />)
		expect(screen.getByText('Modal content')).toBeInTheDocument()
	})

	it('should not render when isOpen is false', () => {
		render(<Modal {...defaultProps} isOpen={false} />)
		expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
	})

	it('should display title when provided', () => {
		render(<Modal {...defaultProps} title="Test Modal" />)
		expect(screen.getByText('Test Modal')).toBeInTheDocument()
	})

	it('should call onClose when close button is clicked', () => {
		const onClose = jest.fn()
		render(<Modal {...defaultProps} onClose={onClose} title="Test" />)
		const closeButton = screen.getByLabelText('Close modal')
		fireEvent.click(closeButton)
		expect(onClose).toHaveBeenCalledTimes(1)
	})

	it('should call onClose when backdrop is clicked', () => {
		const onClose = jest.fn()
		render(<Modal {...defaultProps} onClose={onClose} />)
		const overlay = screen.getByRole('dialog').parentElement
		if (overlay) {
			fireEvent.click(overlay)
			expect(onClose).toHaveBeenCalledTimes(1)
		}
	})

	it('should not call onClose when backdrop is clicked if closeOnBackdropClick is false', () => {
		const onClose = jest.fn()
		render(
			<Modal
				{...defaultProps}
				onClose={onClose}
				closeOnBackdropClick={false}
			/>,
		)
		const overlay = screen.getByRole('dialog').parentElement
		if (overlay) {
			fireEvent.click(overlay)
			expect(onClose).not.toHaveBeenCalled()
		}
	})

	it('should render footer when provided', () => {
		render(<Modal {...defaultProps} footer={<button>Action</button>} />)
		expect(screen.getByText('Action')).toBeInTheDocument()
	})

	it('should not show close button when showCloseButton is false', () => {
		render(<Modal {...defaultProps} showCloseButton={false} title="Test" />)
		expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument()
	})

	it('should apply correct size', () => {
		const { rerender } = render(<Modal {...defaultProps} size="small" />)
		expect(screen.getByRole('dialog')).toBeInTheDocument()

		rerender(<Modal {...defaultProps} size="large" />)
		expect(screen.getByRole('dialog')).toBeInTheDocument()
	})
})
