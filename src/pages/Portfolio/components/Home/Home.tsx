import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { iIdProps } from '../../Portfolio'
import { Header } from './Header/Header'

export function Home({ id }: iIdProps): JSX.Element {
	return (
		<section id={id}>
			<StyledContainer>
				<Header/>
			</StyledContainer>
		</section>
	)
}