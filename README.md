# Ayna UI

A modern, brutalist-inspired React component library built with TypeScript and styled-components.

[![npm version](https://img.shields.io/npm/v/ayna-ui.svg)](https://www.npmjs.com/package/ayna-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎨 Design Philosophy

Ayna UI embraces a bold, brutalist design language featuring:

-   Strong black borders and high-contrast aesthetics
-   Prominent box shadows for depth
-   Clean, geometric shapes
-   Interactive hover and active states
-   Source Code Pro typography

## 📦 Installation

```bash
npm install ayna-ui
```

or

```bash
yarn add ayna-ui
```

## 🔧 Prerequisites

-   React >= 16.0.0
-   styled-components (peer dependency)

## 🚀 Usage

Import components individually for optimal tree-shaking:

```jsx
import { Button, Input, Card, Badge, Avatar, Alert } from 'ayna-ui'

function App() {
	return (
		<div>
			<Button variant="primary" size="medium">
				Click Me
			</Button>
			<Input placeholder="Enter text..." />
			<Badge variant="success">New</Badge>
			<Avatar name="John Doe" size="medium" />
			<Alert variant="info" title="Welcome!">
				<p>Get started with Ayna UI</p>
			</Alert>
		</div>
	)
}
```

## 📚 Components

### Button

A versatile button component with multiple variants and sizes.

```jsx
<Button variant="primary" size="medium">Primary</Button>
<Button variant="secondary" size="medium">Secondary</Button>
<Button variant="outline" size="medium">Outline</Button>
<Button variant="danger" size="medium">Danger</Button>
<Button variant="success" size="medium">Success</Button>
<Button disabled>Disabled</Button>
```

**Props:**

-   `variant?`: `'primary' | 'secondary' | 'outline' | 'danger' | 'success'` - Button style (default: `'secondary'`)
-   `size?`: `'small' | 'medium' | 'large'` - Button size (default: `'medium'`)
-   All standard HTML button attributes

### Input

Text input component with multiple variants and styling options.

```jsx
<Input variant="default" placeholder="Default input" />
<Input variant="filled" placeholder="Filled input" />
<Input variant="flushed" placeholder="Flushed input" />
<Input error placeholder="Error state" />
<Input fullWidth placeholder="Full width" />
```

**Props:**

-   `variant?`: `'default' | 'filled' | 'flushed'` - Input style (default: `'default'`)
-   `error?`: `boolean` - Error state styling
-   `fullWidth?`: `boolean` - Full width input
-   All standard HTML input attributes

### Badge

Small label component for status indicators and tags.

```jsx
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>
```

**Props:**

-   `variant?`: `'default' | 'success' | 'warning' | 'danger' | 'info'` - Badge style (default: `'default'`)
-   `size?`: `'small' | 'medium' | 'large'` - Badge size (default: `'medium'`)
-   `children`: `React.ReactNode` - Badge content

### Avatar

User avatar component with image or initials support.

```jsx
<Avatar src="https://example.com/avatar.jpg" alt="User" />
<Avatar name="John Doe" size="medium" />
<Avatar name="Jane Smith" size="large" />
```

**Props:**

-   `src?`: `string` - Avatar image URL
-   `alt?`: `string` - Image alt text
-   `name?`: `string` - User name for initials fallback
-   `size?`: `'small' | 'medium' | 'large' | 'xlarge'` - Avatar size (default: `'medium'`)

### Alert

Alert/notification component with variants and dismissible option.

```jsx
<Alert variant="info" title="Information">
	<p>Informational message</p>
</Alert>
<Alert variant="success" title="Success" onClose={() => {}}>
	<p>Success message with close button</p>
</Alert>
```

**Props:**

-   `variant?`: `'info' | 'success' | 'warning' | 'danger'` - Alert style (default: `'info'`)
-   `title?`: `string` - Alert title
-   `children`: `React.ReactNode` - Alert content
-   `onClose?`: `() => void` - Close handler (shows close button when provided)

### Spinner

Loading spinner component.

```jsx
<Spinner size="small" />
<Spinner size="medium" label="Loading..." />
<Spinner size="large" label="Please wait" />
```

**Props:**

-   `size?`: `'small' | 'medium' | 'large'` - Spinner size (default: `'medium'`)
-   `label?`: `string` - Optional loading text

### Card

Container component for grouping content.

```jsx
<Card title="Card Title" footer="Card Footer">
	<p>Your content here</p>
</Card>
```

**Props:**

-   `title?`: `string` - Card title
-   `footer?`: `React.ReactNode` - Card footer content
-   `children`: `React.ReactNode` - Card body content

### Checkbox

Checkbox input with label support.

```jsx
<Checkbox
	label="Accept terms"
	checked={isChecked}
	onChange={(e) => setIsChecked(e.target.checked)}
/>
```

**Props:**

-   `label?`: `string` - Checkbox label
-   All standard HTML input[type="checkbox"] attributes

### Select

Dropdown select component.

```jsx
<Select
	options={[
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
	]}
	placeholder="Select an option"
	fullWidth={false}
/>
```

**Props:**

-   `options`: `Array<{ value: string; label: string }>` - Select options
-   `placeholder?`: `string` - Placeholder text
-   `fullWidth?`: `boolean` - Full width select
-   All standard HTML select attributes

### Page

Page layout wrapper component.

```jsx
<Page title="Page Title">
	<p>Page content</p>
</Page>
```

**Props:**

-   `title`: `string` - Page title
-   `children`: `React.ReactNode` - Page content

## 🛠️ Development

### Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build library
npm run build

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Project Structure

```
ayna-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.styled.ts
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── interface.ts
│   │   └── ...
│   └── index.ts
├── dist/
├── .storybook/
└── rollup.config.mjs
```

### Testing

This library uses Jest and React Testing Library for unit testing:

```bash
npm test
```

All components include comprehensive test coverage following AAA (Arrange-Act-Assert) pattern.

### Building

The library is built using Rollup and outputs both CommonJS and ESM formats:

```bash
npm run build
```

Build outputs:

-   `dist/cjs/` - CommonJS modules
-   `dist/esm/` - ES modules
-   `dist/index.d.ts` - TypeScript definitions

## 📖 Storybook

Explore all components in Storybook:

```bash
npm run storybook
```

Visit `http://localhost:6006` to view the component documentation and live examples.

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

-   `feat:` - New features
-   `fix:` - Bug fixes
-   `docs:` - Documentation changes
-   `style:` - Code style changes (formatting, etc.)
-   `refactor:` - Code refactoring
-   `test:` - Test additions or changes
-   `chore:` - Build process or auxiliary tool changes

### Code Quality

-   ESLint is configured for code linting
-   Husky pre-commit hooks ensure code quality
-   Commitlint validates commit messages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Ishan Bagchi**

-   Email: ishanbagchi4@gmail.com
-   GitHub: [@aynaui](https://github.com/aynaui)

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/aynaui/ayna-ui/issues) on GitHub.

## 🔗 Links

-   [GitHub Repository](https://github.com/aynaui/ayna-ui)
-   [NPM Package](https://www.npmjs.com/package/ayna-ui)
-   [Issue Tracker](https://github.com/aynaui/ayna-ui/issues)

---

Made with ❤️ by Ishan Bagchi
