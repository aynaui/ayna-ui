import React, { useState, useRef, useEffect } from 'react'
import { SelectProps } from './interface'
import {
	SelectWrapper,
	SelectButton,
	SelectArrow,
	SelectDropdown,
	SelectOption,
	Placeholder,
} from './Select.styled'

const Select: React.FC<SelectProps> = ({
	options,
	placeholder = 'Select an option',
	fullWidth = false,
	value,
	onChange,
	disabled = false,
	error = false,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [openUpward, setOpenUpward] = useState(false)
	const wrapperRef = useRef<HTMLDivElement>(null)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const selectedOption = options.find((opt) => opt.value === value)

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

	useEffect(() => {
		if (isOpen && wrapperRef.current) {
			const rect = wrapperRef.current.getBoundingClientRect()
			const viewportHeight = window.innerHeight
			const dropdownHeight = 250 // max-height from styled component
			const spaceBelow = viewportHeight - rect.bottom
			const spaceAbove = rect.top

			// Open upward if not enough space below and more space above
			if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
				setOpenUpward(true)
			} else {
				setOpenUpward(false)
			}
		}
	}, [isOpen])

	const handleToggle = () => {
		if (!disabled) {
			setIsOpen(!isOpen)
		}
	}

	const handleSelect = (optionValue: string, optionDisabled?: boolean) => {
		if (!optionDisabled) {
			onChange?.(optionValue)
			setIsOpen(false)
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (disabled) return

		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			setIsOpen(!isOpen)
		} else if (e.key === 'Escape') {
			setIsOpen(false)
		} else if (e.key === 'ArrowDown') {
			e.preventDefault()
			if (!isOpen) {
				setIsOpen(true)
			}
		} else if (e.key === 'ArrowUp') {
			e.preventDefault()
			if (!isOpen) {
				setIsOpen(true)
			}
		}
	}

	return (
		<SelectWrapper ref={wrapperRef} fullWidth={fullWidth}>
			<SelectButton
				type="button"
				onClick={handleToggle}
				onKeyDown={handleKeyDown}
				fullWidth={fullWidth}
				isOpen={isOpen}
				disabled={disabled}
				error={error}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				{selectedOption ? (
					selectedOption.label
				) : (
					<Placeholder>{placeholder}</Placeholder>
				)}
			</SelectButton>
			<SelectArrow isOpen={isOpen} />
			<SelectDropdown
				ref={dropdownRef}
				isOpen={isOpen}
				openUpward={openUpward}
				role="listbox"
			>
				{options.map((option) => (
					<SelectOption
						key={option.value}
						isSelected={option.value === value}
						disabled={option.disabled}
						onClick={() =>
							handleSelect(option.value, option.disabled)
						}
						role="option"
						aria-selected={option.value === value}
					>
						{option.label}
					</SelectOption>
				))}
			</SelectDropdown>
		</SelectWrapper>
	)
}

export default Select
