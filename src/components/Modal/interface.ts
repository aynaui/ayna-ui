import { ReactNode } from 'react'

export interface ModalProps {
	/** Whether the modal is visible */
	isOpen: boolean
	/** Callback when the modal should be closed */
	onClose: () => void
	/** Modal title */
	title?: string
	/** Modal content */
	children: ReactNode
	/** Footer content (usually buttons) */
	footer?: ReactNode
	/** Size variant */
	size?: 'small' | 'medium' | 'large'
	/** Whether clicking the backdrop closes the modal */
	closeOnBackdropClick?: boolean
	/** Whether to show the close button */
	showCloseButton?: boolean
}
