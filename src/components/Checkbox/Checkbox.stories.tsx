import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
	args: {
		label: 'Default checkbox',
	},
}

export const Checked: Story = {
	args: {
		label: 'Checked checkbox',
		checked: true,
	},
}

export const Unchecked: Story = {
	args: {
		label: 'Unchecked checkbox',
		checked: false,
	},
}

export const Disabled: Story = {
	args: {
		label: 'Disabled checkbox',
		disabled: true,
	},
}

export const DisabledChecked: Story = {
	args: {
		label: 'Disabled checked checkbox',
		disabled: true,
		checked: true,
	},
}

export const WithoutLabel: Story = {
	args: {},
}

export const Interactive: Story = {
	render: () => {
		const [checked, setChecked] = useState(false)
		return (
			<div>
				<Checkbox
					label="Toggle me"
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
				/>
				<p style={{ marginTop: '16px', fontFamily: 'monospace' }}>
					Status: {checked ? 'Checked' : 'Unchecked'}
				</p>
			</div>
		)
	},
}

export const MultipleOptions: Story = {
	render: () => {
		const [options, setOptions] = useState({
			option1: false,
			option2: true,
			option3: false,
		})

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
				}}
			>
				<Checkbox
					label="Option 1"
					checked={options.option1}
					onChange={(e) =>
						setOptions({ ...options, option1: e.target.checked })
					}
				/>
				<Checkbox
					label="Option 2"
					checked={options.option2}
					onChange={(e) =>
						setOptions({ ...options, option2: e.target.checked })
					}
				/>
				<Checkbox
					label="Option 3"
					checked={options.option3}
					onChange={(e) =>
						setOptions({ ...options, option3: e.target.checked })
					}
				/>
			</div>
		)
	},
}
