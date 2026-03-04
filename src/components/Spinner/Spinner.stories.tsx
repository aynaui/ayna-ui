import type { Meta, StoryObj } from '@storybook/react'
import Spinner from './Spinner'

const meta: Meta<typeof Spinner> = {
	title: 'Components/Spinner',
	component: Spinner,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
	args: {},
}

export const WithLabel: Story = {
	args: {
		label: 'Loading...',
	},
}

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Loading',
	},
}

export const Medium: Story = {
	args: {
		size: 'medium',
		label: 'Loading',
	},
}

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Loading',
	},
}

export const AllSizes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '32px',
				alignItems: 'center',
			}}
		>
			<Spinner size="small" label="Small" />
			<Spinner size="medium" label="Medium" />
			<Spinner size="large" label="Large" />
		</div>
	),
}

export const InButton: Story = {
	render: () => (
		<button
			style={{
				padding: '12px 24px',
				border: '2px solid #000',
				background: '#000',
				color: '#fff',
				fontFamily: 'monospace',
				cursor: 'not-allowed',
				display: 'flex',
				alignItems: 'center',
				gap: '12px',
			}}
			disabled
		>
			<Spinner size="small" />
			<span>Processing...</span>
		</button>
	),
}
