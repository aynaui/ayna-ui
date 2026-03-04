import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
	args: {
		children: <p>This is a simple card with just content.</p>,
	},
}

export const WithTitle: Story = {
	args: {
		title: 'Card Title',
		children: (
			<div>
				<p>This card has a title header.</p>
				<p>It can contain multiple elements.</p>
			</div>
		),
	},
}

export const WithFooter: Story = {
	args: {
		children: <p>This card has a footer.</p>,
		footer: 'Last updated: March 4, 2026',
	},
}

export const Complete: Story = {
	args: {
		title: 'Complete Card',
		children: (
			<div>
				<p>
					This is a complete card with a title, body content, and
					footer.
				</p>
				<p>It demonstrates all the features of the Card component.</p>
			</div>
		),
		footer: 'Footer information',
	},
}

export const RichContent: Story = {
	args: {
		title: 'Product Card',
		children: (
			<div>
				<h4 style={{ marginTop: 0 }}>Premium Product</h4>
				<p>
					A high-quality product that meets all your needs with
					exceptional features.
				</p>
				<ul>
					<li>Feature 1: Advanced capabilities</li>
					<li>Feature 2: Easy to use</li>
					<li>Feature 3: Great support</li>
				</ul>
			</div>
		),
		footer: (
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<span>$99.99</span>
				<span>In Stock</span>
			</div>
		),
	},
}
