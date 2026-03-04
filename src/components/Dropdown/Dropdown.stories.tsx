import type { Meta, StoryObj } from '@storybook/react'
import Dropdown from './Dropdown'
import Button from '../Button/Button'

const meta: Meta<typeof Dropdown> = {
	title: 'Components/Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dropdown>

const defaultItems = [
	{
		id: '1',
		label: 'Edit',
		onClick: () => alert('Edit clicked'),
	},
	{
		id: '2',
		label: 'Duplicate',
		onClick: () => alert('Duplicate clicked'),
	},
	{
		id: '3',
		label: 'Delete',
		onClick: () => alert('Delete clicked'),
	},
]

export const Default: Story = {
	args: {
		trigger: <Button>Actions</Button>,
		items: defaultItems,
	},
}

export const BottomLeft: Story = {
	args: {
		trigger: <Button>Bottom Left</Button>,
		items: defaultItems,
		position: 'bottom-left',
	},
}

export const BottomRight: Story = {
	args: {
		trigger: <Button>Bottom Right</Button>,
		items: defaultItems,
		position: 'bottom-right',
	},
}

export const TopLeft: Story = {
	args: {
		trigger: <Button>Top Left</Button>,
		items: defaultItems,
		position: 'top-left',
	},
}

export const TopRight: Story = {
	args: {
		trigger: <Button>Top Right</Button>,
		items: defaultItems,
		position: 'top-right',
	},
}

export const WithIcons: Story = {
	args: {
		trigger: <Button>Menu</Button>,
		items: [
			{
				id: '1',
				label: 'New File',
				icon: <span>📄</span>,
				onClick: () => alert('New File'),
			},
			{
				id: '2',
				label: 'New Folder',
				icon: <span>📁</span>,
				onClick: () => alert('New Folder'),
			},
			{
				id: '3',
				label: 'Upload',
				icon: <span>⬆️</span>,
				onClick: () => alert('Upload'),
			},
		],
	},
}

export const WithDividers: Story = {
	args: {
		trigger: <Button>Options</Button>,
		items: [
			{
				id: '1',
				label: 'Edit',
				onClick: () => alert('Edit'),
				divider: true,
			},
			{
				id: '2',
				label: 'Share',
				onClick: () => alert('Share'),
				divider: true,
			},
			{
				id: '3',
				label: 'Delete',
				onClick: () => alert('Delete'),
			},
		],
	},
}

export const WithDisabledItems: Story = {
	args: {
		trigger: <Button>Menu</Button>,
		items: [
			{
				id: '1',
				label: 'Available Action',
				onClick: () => alert('Available'),
			},
			{
				id: '2',
				label: 'Disabled Action',
				onClick: () => alert('Should not fire'),
				disabled: true,
			},
			{
				id: '3',
				label: 'Another Available',
				onClick: () => alert('Available'),
			},
		],
	},
}

export const Disabled: Story = {
	args: {
		trigger: <Button disabled>Disabled Menu</Button>,
		items: defaultItems,
		disabled: true,
	},
}

export const CustomTrigger: Story = {
	args: {
		trigger: (
			<div
				style={{
					padding: '8px 12px',
					border: '2px solid #000',
					cursor: 'pointer',
				}}
			>
				Custom Trigger ▼
			</div>
		),
		items: defaultItems,
	},
}

export const LongMenu: Story = {
	args: {
		trigger: <Button>Long Menu</Button>,
		items: [
			{ id: '1', label: 'Option 1', onClick: () => {} },
			{ id: '2', label: 'Option 2', onClick: () => {} },
			{ id: '3', label: 'Option 3', onClick: () => {}, divider: true },
			{ id: '4', label: 'Option 4', onClick: () => {} },
			{ id: '5', label: 'Option 5', onClick: () => {} },
			{ id: '6', label: 'Option 6', onClick: () => {}, divider: true },
			{ id: '7', label: 'Option 7', onClick: () => {} },
			{ id: '8', label: 'Option 8', onClick: () => {} },
		],
	},
}
