import Button from './Button'

export default {
	title: 'Components/Button',
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
		variant: {
			description: 'Visual style variant of the button.',
			control: {
				type: 'inline-radio',
				options: [
					'primary',
					'secondary',
					'outline',
					'danger',
					'success',
				],
			},
		},
		onClick: { action: 'clicked' },
	},
}

export const Primary = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
		size: 'medium',
	},
}

export const Secondary = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
		size: 'medium',
	},
}

export const Outline = {
	args: {
		children: 'Outline Button',
		variant: 'outline',
		size: 'medium',
	},
}

export const Danger = {
	args: {
		children: 'Danger Button',
		variant: 'danger',
		size: 'medium',
	},
}

export const Success = {
	args: {
		children: 'Success Button',
		variant: 'success',
		size: 'medium',
	},
}

export const SmallButton = {
	args: {
		children: 'Small Button',
		size: 'small',
		variant: 'primary',
	},
}

export const LargeButton = {
	args: {
		children: 'Large Button',
		size: 'large',
		variant: 'primary',
	},
}

export const Disabled = {
	args: {
		children: 'Disabled Button',
		disabled: true,
		variant: 'primary',
	},
}
