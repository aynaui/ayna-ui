import React, { useState, useRef, useEffect } from 'react'
import { TooltipProps } from './interface'
import { TooltipWrapper, TooltipContent } from './Tooltip.styled'

const Tooltip: React.FC<TooltipProps> = ({
	content,
	children,
	position = 'top',
	delay = 200,
}) => {
	const [isVisible, setIsVisible] = useState(false)
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	const handleMouseEnter = () => {
		timeoutRef.current = setTimeout(() => {
			setIsVisible(true)
		}, delay)
	}

	const handleMouseLeave = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
		setIsVisible(false)
	}

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	}, [])

	return (
		<TooltipWrapper
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			<TooltipContent
				isVisible={isVisible}
				position={position}
				role="tooltip"
			>
				{content}
			</TooltipContent>
		</TooltipWrapper>
	)
}

export default Tooltip
