import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tooltip from './Tooltip'

describe('Tooltip', () => {
	it('should render children', () => {
		render(
			<Tooltip content="Tooltip text">
				<button>Hover me</button>
			</Tooltip>,
		)
		expect(screen.getByText('Hover me')).toBeInTheDocument()
	})

	it('should show tooltip on mouse enter', async () => {
		render(
			<Tooltip content="Tooltip text" delay={0}>
				<button>Hover me</button>
			</Tooltip>,
		)

		const button = screen.getByText('Hover me')
		fireEvent.mouseEnter(button)

		await waitFor(() => {
			expect(screen.getByRole('tooltip')).toBeVisible()
			expect(screen.getByText('Tooltip text')).toBeInTheDocument()
		})
	})

	it('should hide tooltip on mouse leave', async () => {
		const { container } = render(
			<Tooltip content="Tooltip text" delay={0}>
				<button>Hover me</button>
			</Tooltip>,
		)

		const button = screen.getByText('Hover me')
		fireEvent.mouseEnter(button)

		const tooltip = container.querySelector('[role="tooltip"]')

		await waitFor(() => {
			expect(tooltip).toBeVisible()
		})

		fireEvent.mouseLeave(button)

		await waitFor(() => {
			expect(tooltip).not.toBeVisible()
		})
	})

	it('should respect delay prop', async () => {
		jest.useFakeTimers()

		const { container } = render(
			<Tooltip content="Tooltip text" delay={500}>
				<button>Hover me</button>
			</Tooltip>,
		)

		const button = screen.getByText('Hover me')
		fireEvent.mouseEnter(button)

		const tooltip = container.querySelector('[role="tooltip"]')
		expect(tooltip).not.toBeVisible()

		jest.advanceTimersByTime(500)

		await waitFor(() => {
			expect(tooltip).toBeVisible()
		})

		jest.useRealTimers()
	})

	it('should render in different positions', () => {
		const { container, rerender } = render(
			<Tooltip content="Top" position="top">
				<button>Button</button>
			</Tooltip>,
		)
		expect(container.querySelector('[role="tooltip"]')).toBeInTheDocument()

		rerender(
			<Tooltip content="Bottom" position="bottom">
				<button>Button</button>
			</Tooltip>,
		)
		expect(container.querySelector('[role="tooltip"]')).toBeInTheDocument()

		rerender(
			<Tooltip content="Left" position="left">
				<button>Button</button>
			</Tooltip>,
		)
		expect(container.querySelector('[role="tooltip"]')).toBeInTheDocument()

		rerender(
			<Tooltip content="Right" position="right">
				<button>Button</button>
			</Tooltip>,
		)
		expect(container.querySelector('[role="tooltip"]')).toBeInTheDocument()
	})

	it('should cancel timeout on unmount', () => {
		jest.useFakeTimers()

		const { unmount } = render(
			<Tooltip content="Tooltip text" delay={500}>
				<button>Hover me</button>
			</Tooltip>,
		)

		const button = screen.getByText('Hover me')
		fireEvent.mouseEnter(button)

		unmount()

		expect(() => jest.advanceTimersByTime(500)).not.toThrow()

		jest.useRealTimers()
	})
})
