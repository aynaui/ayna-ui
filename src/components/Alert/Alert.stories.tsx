import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Alert from './Alert'

const meta: Meta<typeof Alert> = {
	title: 'Components/Alert',
	component: Alert,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
	args: {
		variant: 'info',
		title: 'Information',
		children: <p>This is an informational alert message.</p>,
	},
}

export const Success: Story = {
	args: {
		variant: 'success',
		title: 'Success',
		children: <p>Your action was completed successfully!</p>,
	},
}

export const Warning: Story = {
	args: {
		variant: 'warning',
		title: 'Warning',
		children: <p>Please review this warning before proceeding.</p>,
	},
}

export const Danger: Story = {
	args: {
		variant: 'danger',
		title: 'Error',
		children: <p>An error occurred. Please try again.</p>,
	},
}

export const WithoutTitle: Story = {
	args: {
		variant: 'info',
		children: <p>This alert has no title.</p>,
	},
}

export const Closable: Story = {
	render: () => {
		const [show, setShow] = useState(true)

		return (
			<div>
				{show && (
					<Alert
						variant="info"
						title="Dismissible Alert"
						onClose={() => setShow(false)}
					>
						<p>
							You can close this alert by clicking the × button.
						</p>
					</Alert>
				)}
				{!show && (
					<button
						onClick={() => setShow(true)}
						style={{
							padding: '8px 16px',
							fontFamily: 'monospace',
						}}
					>
						Show Alert Again
					</button>
				)}
			</div>
		)
	},
}

export const MultipleAlerts: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<Alert variant="info" title="Information">
				<p>{`Here's some helpful information.`}</p>
			</Alert>
			<Alert variant="success" title="Success">
				<p>Everything went as planned!</p>
			</Alert>
			<Alert variant="warning" title="Warning">
				<p>Be cautious about this action.</p>
			</Alert>
			<Alert variant="danger" title="Error">
				<p>Something went wrong.</p>
			</Alert>
		</div>
	),
}

export const WithRichContent: Story = {
	args: {
		variant: 'warning',
		title: 'Important Notice',
		children: (
			<div>
				<p>Please ensure you have:</p>
				<ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
					<li>Saved your work</li>
					<li>Backed up your data</li>
					<li>Notified your team</li>
				</ul>
				<p>Before proceeding with this action.</p>
			</div>
		),
	},
}
