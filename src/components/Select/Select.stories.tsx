import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Select from './Select'

const meta: Meta<typeof Select> = {
	title: 'Components/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Select>

const sampleOptions = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
	{ value: '4', label: 'Option 4' },
]

const countryOptions = [
	{ value: 'us', label: 'United States' },
	{ value: 'uk', label: 'United Kingdom' },
	{ value: 'ca', label: 'Canada' },
	{ value: 'au', label: 'Australia' },
	{ value: 'de', label: 'Germany' },
	{ value: 'fr', label: 'France' },
	{ value: 'jp', label: 'Japan' },
]

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState('')
		return (
			<Select
				options={sampleOptions}
				placeholder="Select an option"
				value={value}
				onChange={setValue}
			/>
		)
	},
}

export const WithValue: Story = {
	render: () => {
		const [value, setValue] = useState('2')
		return (
			<Select options={sampleOptions} value={value} onChange={setValue} />
		)
	},
}

export const Disabled: Story = {
	args: {
		options: sampleOptions,
		placeholder: 'Disabled select',
		disabled: true,
	},
}

export const Error: Story = {
	render: () => {
		const [value, setValue] = useState('')
		return (
			<Select
				options={sampleOptions}
				placeholder="Select an option"
				value={value}
				onChange={setValue}
				error
			/>
		)
	},
}

export const FullWidth: Story = {
	render: () => {
		const [value, setValue] = useState('')
		return (
			<Select
				options={sampleOptions}
				placeholder="Full width select"
				value={value}
				onChange={setValue}
				fullWidth
			/>
		)
	},
	parameters: {
		layout: 'padded',
	},
}

export const Countries: Story = {
	render: () => {
		const [value, setValue] = useState('')
		return (
			<Select
				options={countryOptions}
				placeholder="Select a country"
				value={value}
				onChange={setValue}
			/>
		)
	},
}

export const WithDisabledOptions: Story = {
	render: () => {
		const [value, setValue] = useState('')
		const optionsWithDisabled = [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2 (Disabled)', disabled: true },
			{ value: '3', label: 'Option 3' },
			{ value: '4', label: 'Option 4 (Disabled)', disabled: true },
		]
		return (
			<Select
				options={optionsWithDisabled}
				placeholder="Select an option"
				value={value}
				onChange={setValue}
			/>
		)
	},
}

export const Interactive: Story = {
	render: () => {
		const [selectedValue, setSelectedValue] = useState('')

		return (
			<div>
				<Select
					options={sampleOptions}
					placeholder="Select an option"
					value={selectedValue}
					onChange={setSelectedValue}
				/>
				<p
					style={{
						marginTop: '16px',
						fontFamily: 'Source Code Pro, monospace',
						fontSize: '14px',
					}}
				>
					Selected value: {selectedValue || 'None'}
				</p>
			</div>
		)
	},
}

export const Form: Story = {
	render: () => {
		const [formData, setFormData] = useState({
			country: '',
			size: '',
			color: '',
		})

		const sizeOptions = [
			{ value: 'xs', label: 'Extra Small' },
			{ value: 's', label: 'Small' },
			{ value: 'm', label: 'Medium' },
			{ value: 'l', label: 'Large' },
			{ value: 'xl', label: 'Extra Large' },
		]

		const colorOptions = [
			{ value: 'red', label: 'Red' },
			{ value: 'blue', label: 'Blue' },
			{ value: 'green', label: 'Green' },
			{ value: 'black', label: 'Black' },
			{ value: 'white', label: 'White' },
		]

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
					width: '300px',
				}}
			>
				<Select
					options={countryOptions}
					placeholder="Select country"
					value={formData.country}
					onChange={(val) =>
						setFormData({ ...formData, country: val })
					}
					fullWidth
				/>
				<Select
					options={sizeOptions}
					placeholder="Select size"
					value={formData.size}
					onChange={(val) => setFormData({ ...formData, size: val })}
					fullWidth
				/>
				<Select
					options={colorOptions}
					placeholder="Select color"
					value={formData.color}
					onChange={(val) => setFormData({ ...formData, color: val })}
					fullWidth
				/>
			</div>
		)
	},
}

export const BottomOfViewport: Story = {
	render: () => {
		const [value, setValue] = useState('')
		return (
			<div
				style={{
					height: '90vh',
					display: 'flex',
					alignItems: 'flex-end',
				}}
			>
				<Select
					options={sampleOptions}
					placeholder="Opens upward"
					value={value}
					onChange={setValue}
				/>
			</div>
		)
	},
	parameters: {
		layout: 'fullscreen',
	},
}
