import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { iIdProps } from '../../Portfolio'
import { StyledContact } from './StyledContact'
import arrowIcon from '../../../../assets/arrowIcon.svg'
import { ContactForm } from './Form/ContactForm'

export function Contact ({ id }: iIdProps): JSX.Element {
	return (
		<StyledContact id={id}>
			<StyledContainer>
				<StyledSectionTitle>Deixe-me <br/>ouvir de você!</StyledSectionTitle>
				<div className='flexLayout'>
					<div>
						<p>Tem um projeto em mente? Estou no seu radar para contratação? Ou deseja se conectar comigo?</p>
						<p>Excelente, estou sempre disponível para tirar suas dúvidas e ajudar no que você precisar.</p>
						<p>Me envie um email preenchendo as informações ao lado.</p>
						<p>Vamos criar uma solução juntos!?</p>
						<img src={arrowIcon} alt="" />
					</div>

					<ContactForm/>
				</div>
			</StyledContainer>
		</StyledContact>
	)
}
