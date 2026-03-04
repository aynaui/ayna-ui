import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from './Tooltip'
import Button from '../Button/Button'

const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
	args: {
		content: 'This is a tooltip',
		children: <Button>Hover me</Button>,
	},
}

export const Top: Story = {
	args: {
		content: 'Tooltip on top',
		position: 'top',
		children: <Button>Top</Button>,
	},
}

export const Bottom: Story = {
	args: {
		content: 'Tooltip on bottom',
		position: 'bottom',
		children: <Button>Bottom</Button>,
	},
}

export const Left: Story = {
	args: {
		content: 'Tooltip on left',
		position: 'left',
		children: <Button>Left</Button>,
	},
}

export const Right: Story = {
	args: {
		content: 'Tooltip on right',
		position: 'right',
		children: <Button>Right</Button>,
	},
}

export const WithDelay: Story = {
	args: {
		content: 'Appears after 1 second',
		delay: 1000,
		children: <Button>Hover (1s delay)</Button>,
	},
}

export const LongText: Story = {
	args: {
		content: 'This is a longer tooltip with more information',
		children: <Button>Long tooltip</Button>,
	},
}

export const AllPositions: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: '48px',
				padding: '48px',
			}}
		>
			<Tooltip content="Top tooltip" position="top">
				<Button>Top</Button>
			</Tooltip>
			<Tooltip content="Right tooltip" position="right">
				<Button>Right</Button>
			</Tooltip>
			<Tooltip content="Bottom tooltip" position="bottom">
				<Button>Bottom</Button>
			</Tooltip>
			<Tooltip content="Left tooltip" position="left">
				<Button>Left</Button>
			</Tooltip>
		</div>
	),
}
