import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Toast from './Toast'
import { ToastContainer } from './Toast.styled'
import Button from '../Button/Button'
import type {
	Toast as ToastType,
	ToastProps,
	ToastVariant,
	ToastContainerProps,
} from './interface'

const meta: Meta<typeof Toast> = {
	title: 'Components/Toast',
	component: Toast,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toast>

const ToastDemo = (
	args: Omit<ToastProps, 'isVisible' | 'onClose'> & {
		position?: ToastContainerProps['position']
	},
) => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div style={{ padding: '48px' }}>
			<Button onClick={() => setIsVisible(true)}>Show Toast</Button>
			<ToastContainer position={args.position || 'top-right'}>
				<Toast
					{...args}
					isVisible={isVisible}
					onClose={() => setIsVisible(false)}
				/>
			</ToastContainer>
		</div>
	)
}

export const Success: Story = {
	render: () => (
		<ToastDemo
			message="Operation completed successfully!"
			variant="success"
		/>
	),
}

export const Error: Story = {
	render: () => (
		<ToastDemo
			message="An error occurred. Please try again."
			variant="error"
		/>
	),
}

export const Warning: Story = {
	render: () => (
		<ToastDemo
			message="Warning: This action cannot be undone."
			variant="warning"
		/>
	),
}

export const Info: Story = {
	render: () => (
		<ToastDemo message="New updates are available." variant="info" />
	),
}

export const TopRight: Story = {
	render: () => (
		<ToastDemo
			message="Toast at top right"
			variant="info"
			position="top-right"
		/>
	),
}

export const TopLeft: Story = {
	render: () => (
		<ToastDemo
			message="Toast at top left"
			variant="info"
			position="top-left"
		/>
	),
}

export const TopCenter: Story = {
	render: () => (
		<ToastDemo
			message="Toast at top center"
			variant="info"
			position="top-center"
		/>
	),
}

export const BottomRight: Story = {
	render: () => (
		<ToastDemo
			message="Toast at bottom right"
			variant="info"
			position="bottom-right"
		/>
	),
}

export const BottomLeft: Story = {
	render: () => (
		<ToastDemo
			message="Toast at bottom left"
			variant="info"
			position="bottom-left"
		/>
	),
}

export const BottomCenter: Story = {
	render: () => (
		<ToastDemo
			message="Toast at bottom center"
			variant="info"
			position="bottom-center"
		/>
	),
}

export const LongMessage: Story = {
	render: () => (
		<ToastDemo
			message="This is a much longer toast message that demonstrates how the component handles multiple lines of text and longer content."
			variant="info"
		/>
	),
}

export const NoDismiss: Story = {
	render: () => (
		<ToastDemo
			message="This toast won't auto-dismiss"
			variant="info"
			duration={0}
		/>
	),
}

export const MultipleToasts: Story = {
	render: () => {
		const [toasts, setToasts] = useState<ToastType[]>([])

		const addToast = (variant: ToastVariant) => {
			const id = Date.now().toString()
			setToasts((prev) => [
				...prev,
				{
					id,
					message: `${variant.charAt(0).toUpperCase() + variant.slice(1)} toast`,
					variant,
					isVisible: true,
				},
			])
		}

		const removeToast = (id: string) => {
			setToasts((prev) =>
				prev.map((toast) =>
					toast.id === id ? { ...toast, isVisible: false } : toast,
				),
			)
			setTimeout(() => {
				setToasts((prev) => prev.filter((toast) => toast.id !== id))
			}, 300)
		}

		return (
			<div style={{ padding: '48px' }}>
				<div
					style={{
						display: 'flex',
						gap: '12px',
						marginBottom: '24px',
					}}
				>
					<Button
						variant="success"
						onClick={() => addToast('success')}
					>
						Success
					</Button>
					<Button variant="danger" onClick={() => addToast('error')}>
						Error
					</Button>
					<Button
						variant="secondary"
						onClick={() => addToast('warning')}
					>
						Warning
					</Button>
					<Button variant="primary" onClick={() => addToast('info')}>
						Info
					</Button>
				</div>
				<ToastContainer position="top-right">
					{toasts.map((toast) => (
						<Toast
							key={toast.id}
							message={toast.message}
							variant={toast.variant}
							isVisible={toast.isVisible ?? true}
							onClose={() => removeToast(toast.id)}
							position="top-right"
						/>
					))}
				</ToastContainer>
			</div>
		)
	},
}
