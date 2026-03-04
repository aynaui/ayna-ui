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

export const Primary: Story = {
	args: {
		variant: 'primary',
		label: 'Loading...',
	},
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		label: 'Loading...',
	},
}

export const Danger: Story = {
	args: {
		variant: 'danger',
		label: 'Loading...',
	},
}

export const Success: Story = {
	args: {
		variant: 'success',
		label: 'Loading...',
	},
}

export const AllVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '32px',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Spinner variant="primary" label="Primary" />
			<Spinner variant="secondary" label="Secondary" />
			<Spinner variant="danger" label="Danger" />
			<Spinner variant="success" label="Success" />
		</div>
	),
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
		<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
			<button
				style={{
					padding: '12px 24px',
					border: '2px solid #3b82f6',
					background: '#3b82f6',
					color: '#fff',
					fontFamily: 'monospace',
					cursor: 'not-allowed',
					display: 'flex',
					alignItems: 'center',
					gap: '12px',
					boxShadow: '-4px 4px 0px 0px #1e40af',
				}}
				disabled
			>
				<div style={{ filter: 'invert(1) brightness(2)' }}>
					<Spinner size="small" variant="primary" />
				</div>
				<span>Processing...</span>
			</button>
			<button
				style={{
					padding: '12px 24px',
					border: '2px solid #000',
					background: '#fff',
					color: '#000',
					fontFamily: 'monospace',
					cursor: 'not-allowed',
					display: 'flex',
					alignItems: 'center',
					gap: '12px',
					boxShadow: '-4px 4px 0px 0px #000',
				}}
				disabled
			>
				<Spinner size="small" variant="secondary" />
				<span>Loading...</span>
			</button>
		</div>
	),
}
