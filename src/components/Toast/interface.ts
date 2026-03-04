export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
	id: string
	message: string
	variant?: ToastVariant
	duration?: number
	isVisible?: boolean
}

export interface ToastProps {
	/** Toast message */
	message: string
	/** Visual variant */
	variant?: ToastVariant
	/** Duration in ms before auto-dismiss */
	duration?: number
	/** Whether the toast is visible */
	isVisible: boolean
	/** Callback when toast is dismissed */
	onClose: () => void
}

export interface ToastContainerProps {
	/** Position of the toast container */
	position?:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right'
	/** Maximum number of visible toasts */
	maxToasts?: number
}
