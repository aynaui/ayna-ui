import Button from './Button'

export default {
	title: 'MyComponents/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			description:
				'The content inside the button, typically text or an icon.',
			control: {
				type: 'text',
			},
		},
		size: {
			description: 'Size of the button.',
			control: {
				type: 'inline-radio',
				options: ['small', 'medium', 'large'],
			},
		},
		onClick: { action: 'clicked' },
	},
}

export const PrimaryButton = {
	args: {
		children: 'Primary Button',
		size: 'medium',
	},
}

export const SmallButton = {
	args: {
		children: 'Small Button',
		size: 'small',
	},
}

export const LargeButton = {
	args: {
		children: 'Large Button',
		size: 'large',
	},
}
