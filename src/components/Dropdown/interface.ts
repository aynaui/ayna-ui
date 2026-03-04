import { ReactNode } from 'react'

export interface DropdownItem {
	/** Unique id for the item */
	id: string
	/** Label to display */
	label: string
	/** Icon element (optional) */
	icon?: ReactNode
	/** Whether the item is disabled */
	disabled?: boolean
	/** Whether to show a divider after this item */
	divider?: boolean
	/** Click handler for this item */
	onClick?: () => void
}

export interface DropdownProps {
	/** Button text or element to trigger the dropdown */
	trigger: ReactNode
	/** Array of dropdown items */
	items: DropdownItem[]
	/** Position of the dropdown relative to trigger */
	position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'
	/** Whether the dropdown is disabled */
	disabled?: boolean
}
