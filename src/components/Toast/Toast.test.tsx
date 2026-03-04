import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Toast from './Toast'

describe('Toast', () => {
	it('should render toast message', () => {
		render(
			<Toast
				message="Test message"
				isVisible={true}
				onClose={jest.fn()}
				duration={0}
			/>,
		)
		expect(screen.getByText('Test message')).toBeInTheDocument()
	})

	it('should not render when isVisible is false', () => {
		render(
			<Toast
				message="Test message"
				isVisible={false}
				onClose={jest.fn()}
			/>,
		)
		expect(screen.queryByText('Test message')).not.toBeInTheDocument()
	})

	it('should call onClose when close button is clicked', () => {
		const onClose = jest.fn()
		render(
			<Toast message="Test message" isVisible={true} onClose={onClose} />,
		)

		const closeButton = screen.getByLabelText('Close toast')
		fireEvent.click(closeButton)

		expect(onClose).toHaveBeenCalledTimes(1)
	})

	it('should auto-dismiss after duration', async () => {
		jest.useFakeTimers()
		const onClose = jest.fn()

		render(
			<Toast
				message="Test message"
				isVisible={true}
				onClose={onClose}
				duration={1000}
			/>,
		)

		expect(onClose).not.toHaveBeenCalled()

		jest.advanceTimersByTime(1000)

		await waitFor(() => {
			expect(onClose).toHaveBeenCalledTimes(1)
		})

		jest.useRealTimers()
	})

	it('should not auto-dismiss when duration is 0', async () => {
		jest.useFakeTimers()
		const onClose = jest.fn()

		render(
			<Toast
				message="Test message"
				isVisible={true}
				onClose={onClose}
				duration={0}
			/>,
		)

		jest.advanceTimersByTime(5000)

		expect(onClose).not.toHaveBeenCalled()

		jest.useRealTimers()
	})

	it('should render different variants', () => {
		const { rerender } = render(
			<Toast
				message="Success"
				variant="success"
				isVisible={true}
				onClose={jest.fn()}
			/>,
		)
		expect(screen.getByText('Success')).toBeInTheDocument()

		rerender(
			<Toast
				message="Error"
				variant="error"
				isVisible={true}
				onClose={jest.fn()}
			/>,
		)
		expect(screen.getByText('Error')).toBeInTheDocument()

		rerender(
			<Toast
				message="Warning"
				variant="warning"
				isVisible={true}
				onClose={jest.fn()}
			/>,
		)
		expect(screen.getByText('Warning')).toBeInTheDocument()

		rerender(
			<Toast
				message="Info"
				variant="info"
				isVisible={true}
				onClose={jest.fn()}
			/>,
		)
		expect(screen.getByText('Info')).toBeInTheDocument()
	})

	it('should have alert role', () => {
		render(
			<Toast
				message="Test message"
				isVisible={true}
				onClose={jest.fn()}
			/>,
		)
		expect(screen.getByRole('alert')).toBeInTheDocument()
	})
})
