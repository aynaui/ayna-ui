import type { Preview } from '@storybook/react'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: [
					'Documentation',
					['Getting Started', 'Introduction', 'Colors', 'Typography'],
					'Components',
				],
			},
		},
	},
}

export default preview
