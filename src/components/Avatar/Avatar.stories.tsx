import type { Meta, StoryObj } from '@storybook/react'
import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
	args: {
		src: 'https://i.pravatar.cc/150?img=1',
		alt: 'User Avatar',
	},
}

export const WithInitials: Story = {
	args: {
		name: 'John Doe',
	},
}

export const SingleName: Story = {
	args: {
		name: 'John',
	},
}

export const NoNameOrImage: Story = {
	args: {},
}

export const Small: Story = {
	args: {
		name: 'Jane Smith',
		size: 'small',
	},
}

export const Medium: Story = {
	args: {
		name: 'Jane Smith',
		size: 'medium',
	},
}

export const Large: Story = {
	args: {
		name: 'Jane Smith',
		size: 'large',
	},
}

export const XLarge: Story = {
	args: {
		name: 'Jane Smith',
		size: 'xlarge',
	},
}

export const AllSizes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '16px',
				alignItems: 'center',
			}}
		>
			<Avatar name="John Doe" size="small" />
			<Avatar name="John Doe" size="medium" />
			<Avatar name="John Doe" size="large" />
			<Avatar name="John Doe" size="xlarge" />
		</div>
	),
}

export const WithImages: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '16px',
				alignItems: 'center',
			}}
		>
			<Avatar
				src="https://i.pravatar.cc/150?img=1"
				alt="User 1"
				size="small"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?img=2"
				alt="User 2"
				size="medium"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?img=3"
				alt="User 3"
				size="large"
			/>
			<Avatar
				src="https://i.pravatar.cc/150?img=4"
				alt="User 4"
				size="xlarge"
			/>
		</div>
	),
}

export const AvatarGroup: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '8px',
				alignItems: 'center',
			}}
		>
			<Avatar name="Alice Johnson" size="medium" />
			<Avatar name="Bob Smith" size="medium" />
			<Avatar name="Carol White" size="medium" />
			<Avatar
				src="https://i.pravatar.cc/150?img=5"
				alt="User"
				size="medium"
			/>
		</div>
	),
}
