import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Modal from './Modal'
import Button from '../Button/Button'
import { ModalProps } from './interface'

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

const ModalWithButton = (args: Omit<ModalProps, 'isOpen' | 'onClose'>) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
			<Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	)
}

export const Default: Story = {
	render: () => (
		<ModalWithButton title="Modal Title">
			<p>This is the modal content. You can put any content here.</p>
		</ModalWithButton>
	),
}

export const WithFooter: Story = {
	render: () => (
		<ModalWithButton
			title="Confirm Action"
			footer={
				<>
					<Button variant="secondary">Cancel</Button>
					<Button variant="primary">Confirm</Button>
				</>
			}
		>
			<p>Are you sure you want to proceed with this action?</p>
		</ModalWithButton>
	),
}

export const SmallSize: Story = {
	render: () => (
		<ModalWithButton title="Small Modal" size="small">
			<p>This is a small modal.</p>
		</ModalWithButton>
	),
}

export const LargeSize: Story = {
	render: () => (
		<ModalWithButton title="Large Modal" size="large">
			<p>This is a large modal with more content space.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</ModalWithButton>
	),
}

export const WithoutCloseButton: Story = {
	render: () => (
		<ModalWithButton
			title="Important Message"
			showCloseButton={false}
			closeOnBackdropClick={false}
			footer={<Button variant="primary">I Understand</Button>}
		>
			<p>This modal can only be closed using the footer button.</p>
		</ModalWithButton>
	),
}

export const LongContent: Story = {
	render: () => (
		<ModalWithButton title="Terms and Conditions">
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium.
				</p>
				<p>
					Totam rem aperiam, eaque ipsa quae ab illo inventore
					veritatis et quasi architecto beatae vitae dicta sunt
					explicabo.
				</p>
			</div>
		</ModalWithButton>
	),
}
