import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
	args: {
		children: 'Default',
		variant: 'default',
	},
}

export const Success: Story = {
	args: {
		children: 'Success',
		variant: 'success',
	},
}

export const Warning: Story = {
	args: {
		children: 'Warning',
		variant: 'warning',
	},
}

export const Danger: Story = {
	args: {
		children: 'Danger',
		variant: 'danger',
	},
}

export const Info: Story = {
	args: {
		children: 'Info',
		variant: 'info',
	},
}

export const Small: Story = {
	args: {
		children: 'Small',
		size: 'small',
		variant: 'info',
	},
}

export const Medium: Story = {
	args: {
		children: 'Medium',
		size: 'medium',
		variant: 'info',
	},
}

export const Large: Story = {
	args: {
		children: 'Large',
		size: 'large',
		variant: 'info',
	},
}

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
			<Badge variant="default">Default</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="danger">Danger</Badge>
			<Badge variant="info">Info</Badge>
		</div>
	),
}

export const AllSizes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '12px',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Badge size="small" variant="info">
				Small
			</Badge>
			<Badge size="medium" variant="info">
				Medium
			</Badge>
			<Badge size="large" variant="info">
				Large
			</Badge>
		</div>
	),
}
