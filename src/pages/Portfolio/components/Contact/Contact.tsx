import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { iIdProps } from '../../Portfolio'

export function Contact ({ id }: iIdProps): JSX.Element {
	return (
		<section id={id}>
			<StyledContainer>
				<h3>Contato</h3>
				<StyledSectionTitle>Deixe-me <br/>ouvir de você!</StyledSectionTitle>
				<p>Tem um projeto em mente? Estou no seu radar para contratação? Ou deseja se conectar comigo?</p>
				<p>Excelente, estou sempre disponível para tirar suas dúvidas e ajudar no que você precisar</p>
				<p>Me envie um email preenchendo as informações ao lado.</p>
				<p>Vamos criar uma solução juntos?!</p>

				<form>
					<fieldset>
						<label htmlFor="email">Email</label>
						<input id='email' type="email" name='email' placeholder='Digite seu email...'/>
					</fieldset>

					<fieldset>
						<label htmlFor="subject">Assunto</label>
						<input id='subject' type="text" name='subject' placeholder='Digite o assunto do email...'/>
					</fieldset>

					<fieldset>
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message" value='Digite sua mensagem...'></textarea>
					</fieldset>
					
					<button type="submit">Enviar</button>
				</form>
			</StyledContainer>
		</section>
	)
}
