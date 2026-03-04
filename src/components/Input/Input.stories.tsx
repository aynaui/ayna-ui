import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
	args: {
		placeholder: 'Enter text...',
		variant: 'default',
	},
}

export const Filled: Story = {
	args: {
		placeholder: 'Filled variant...',
		variant: 'filled',
	},
}

export const Flushed: Story = {
	args: {
		placeholder: 'Flushed variant...',
		variant: 'flushed',
	},
}

export const WithValue: Story = {
	args: {
		value: 'Sample text',
		placeholder: 'Enter text...',
	},
}

export const Error: Story = {
	args: {
		error: true,
		placeholder: 'Enter text...',
		value: 'Invalid input',
	},
}

export const ErrorFilled: Story = {
	args: {
		error: true,
		variant: 'filled',
		placeholder: 'Enter text...',
		value: 'Invalid input',
	},
}

export const ErrorFlushed: Story = {
	args: {
		error: true,
		variant: 'flushed',
		placeholder: 'Enter text...',
		value: 'Invalid input',
	},
}

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled input',
	},
}

export const FullWidth: Story = {
	args: {
		fullWidth: true,
		placeholder: 'Full width input',
	},
	parameters: {
		layout: 'padded',
	},
}
