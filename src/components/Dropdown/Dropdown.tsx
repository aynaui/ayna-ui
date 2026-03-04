import React, { useState, useRef, useEffect } from 'react'
import { DropdownProps, DropdownItem } from './interface'
import {
	DropdownWrapper,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem as StyledDropdownItem,
	DropdownDivider,
	DropdownIcon,
} from './Dropdown.styled'

const Dropdown: React.FC<DropdownProps> = ({
	trigger,
	items,
	position = 'bottom-left',
	disabled = false,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () =>
			document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleToggle = () => {
		if (!disabled) {
			setIsOpen(!isOpen)
		}
	}

	const handleItemClick = (item: DropdownItem) => {
		if (!item.disabled && item.onClick) {
			item.onClick()
			setIsOpen(false)
		}
	}

	return (
		<DropdownWrapper ref={wrapperRef}>
			<DropdownTrigger onClick={handleToggle} disabled={disabled}>
				{trigger}
			</DropdownTrigger>
			<DropdownMenu isOpen={isOpen} position={position} role="menu">
				{items.map((item, index) => (
					<React.Fragment key={item.id}>
						<StyledDropdownItem
							onClick={() => handleItemClick(item)}
							disabled={item.disabled}
							role="menuitem"
							aria-disabled={item.disabled}
						>
							{item.icon && (
								<DropdownIcon>{item.icon}</DropdownIcon>
							)}
							{item.label}
						</StyledDropdownItem>
						{item.divider && index < items.length - 1 && (
							<DropdownDivider />
						)}
					</React.Fragment>
				))}
			</DropdownMenu>
		</DropdownWrapper>
	)
}

export default Dropdown
