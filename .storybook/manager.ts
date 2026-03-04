import { addons } from '@storybook/manager-api'

addons.setConfig({
	sidebar: {
		showRoots: true,
	},
	initialActive: 'sidebar',
	enableShortcuts: true,
})

// Set the default story to load
const urlParams = new URLSearchParams(window.location.search)
if (!urlParams.has('path') && window.location.pathname === '/') {
	window.history.replaceState(
		{},
		'',
		'/?path=/docs/documentation-getting-started--docs',
	)
}
