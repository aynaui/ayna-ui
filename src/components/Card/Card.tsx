import React from 'react'
import { CardProps } from './interface'
import { CardContainer, CardHeader, CardBody, CardFooter } from './Card.styled'

const Card: React.FC<CardProps> = ({ title, children, footer }) => {
	return (
		<CardContainer data-testid="card-container">
			{title && (
				<CardHeader data-testid="card-header">
					<h3>{title}</h3>
				</CardHeader>
			)}
			<CardBody data-testid="card-body">{children}</CardBody>
			{footer && (
				<CardFooter data-testid="card-footer">{footer}</CardFooter>
			)}
		</CardContainer>
	)
}

export default Card
