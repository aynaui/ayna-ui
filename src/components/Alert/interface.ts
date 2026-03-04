export interface AlertProps {
	children: React.ReactNode
	title?: string
	variant?: 'info' | 'success' | 'warning' | 'danger'
	onClose?: () => void
}
