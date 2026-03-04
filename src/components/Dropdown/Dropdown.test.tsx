import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Dropdown from './Dropdown'

const mockItems = [
	{ id: '1', label: 'Item 1', onClick: jest.fn() },
	{ id: '2', label: 'Item 2', onClick: jest.fn() },
	{ id: '3', label: 'Item 3', onClick: jest.fn(), disabled: true },
]

describe('Dropdown', () => {
	it('should render trigger', () => {
		render(<Dropdown trigger={<button>Menu</button>} items={mockItems} />)
		expect(screen.getByText('Menu')).toBeInTheDocument()
	})

	it('should open menu when trigger is clicked', () => {
		render(<Dropdown trigger={<button>Menu</button>} items={mockItems} />)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)

		expect(screen.getByRole('menu')).toBeVisible()
		expect(screen.getByText('Item 1')).toBeInTheDocument()
	})

	it('should call onClick when item is clicked', () => {
		const onClick = jest.fn()
		const items = [{ id: '1', label: 'Item 1', onClick }]

		render(<Dropdown trigger={<button>Menu</button>} items={items} />)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)

		const item = screen.getByText('Item 1')
		fireEvent.click(item)

		expect(onClick).toHaveBeenCalledTimes(1)
	})

	it('should close menu after item is clicked', () => {
		const onClick = jest.fn()
		const items = [{ id: '1', label: 'Item 1', onClick }]

		const { container } = render(
			<Dropdown trigger={<button>Menu</button>} items={items} />,
		)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)

		const item = screen.getByText('Item 1')
		fireEvent.click(item)

		const menu = container.querySelector('[role="menu"]')
		expect(menu).not.toBeVisible()
	})

	it('should not call onClick for disabled items', () => {
		const onClick = jest.fn()
		const items = [{ id: '1', label: 'Item 1', onClick, disabled: true }]

		render(<Dropdown trigger={<button>Menu</button>} items={items} />)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)

		const item = screen.getByText('Item 1')
		fireEvent.click(item)

		expect(onClick).not.toHaveBeenCalled()
	})

	it('should not open when disabled', () => {
		const { container } = render(
			<Dropdown
				trigger={<button>Menu</button>}
				items={mockItems}
				disabled
			/>,
		)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)

		const menu = container.querySelector('[role="menu"]')
		expect(menu).not.toBeVisible()
	})

	it('should close when clicking outside', () => {
		const { container } = render(
			<div>
				<Dropdown trigger={<button>Menu</button>} items={mockItems} />
				<button>Outside</button>
			</div>,
		)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)
		expect(screen.getByRole('menu')).toBeVisible()

		const outside = screen.getByText('Outside')
		fireEvent.mouseDown(outside)

		const menu = container.querySelector('[role="menu"]')
		expect(menu).not.toBeVisible()
	})

	it('should render icons when provided', () => {
		const items = [
			{
				id: '1',
				label: 'Item 1',
				icon: <span>📁</span>,
				onClick: jest.fn(),
			},
		]

		render(<Dropdown trigger={<button>Menu</button>} items={items} />)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)

		expect(screen.getByText('📁')).toBeInTheDocument()
	})

	it('should render dividers', () => {
		const items = [
			{ id: '1', label: 'Item 1', divider: true, onClick: jest.fn() },
			{ id: '2', label: 'Item 2', onClick: jest.fn() },
		]

		render(<Dropdown trigger={<button>Menu</button>} items={items} />)

		const trigger = screen.getByText('Menu')
		fireEvent.click(trigger)

		const menu = screen.getByRole('menu')
		expect(menu).toBeInTheDocument()
	})
})
