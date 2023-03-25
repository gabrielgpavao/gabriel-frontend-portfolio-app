import React, { useState } from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { iIdProps } from '../../Portfolio'
import { StyledContact } from './StyledContact'

type tEvent = React.FocusEvent<HTMLInputElement, Element> | React.FocusEvent<HTMLTextAreaElement, Element>

export function Contact ({ id }: iIdProps): JSX.Element {
	const [hasEmailValue, setHasEmailValue] = useState<boolean>(false)
	const [hasSubjectValue, setHasSubjectValue] = useState<boolean>(false)
	const [hasMessageValue, setHasMessageValue] = useState<boolean>(false)
	
	function handleValue (setState: (value: boolean) => void, event: tEvent): void {
		if (event.target.value) {
			setState(true)
		} else {
			setState(false)
		}
	}
	
	return (
		<StyledContact id={id} hasEmailValue={hasEmailValue} hasSubjectValue={hasSubjectValue} hasMessageValue={hasMessageValue}>
			<StyledContainer>
				<StyledSectionTitle>Deixe-me <br/>ouvir de você!</StyledSectionTitle>
				<div className='flexLayout'>
					<div>
						<p>Tem um projeto em mente? Estou no seu radar para contratação? Ou deseja se conectar comigo?</p>
						<p>Excelente, estou sempre disponível para tirar suas dúvidas e ajudar no que você precisar.</p>
						<p>Me envie um email preenchendo as informações ao lado.</p>
						<p>Vamos criar uma solução juntos!?</p>
					</div>

					<form>
						<fieldset>
							<input id='email' type="email" name='email' onBlur={(event) => {handleValue(setHasEmailValue, event)}}/>
							<label htmlFor="email" className='emailLable'>Email</label>
							<span className='highlight'></span>
						</fieldset>

						<fieldset>
							<input id='subject' type="text" name='subject' onBlur={(event) => {handleValue(setHasSubjectValue, event)}}/>
							<label htmlFor="subject" className='subjectLable'>Assunto</label>
							<span className='highlight'></span>
						</fieldset>

						<fieldset>
							<textarea id="message" name="message" rows={1.5} onBlur={(event) => {handleValue(setHasMessageValue, event)}}></textarea>
							<label htmlFor="message" className='messageLable'>Message</label>
							<span className='highlight'></span>
						</fieldset>
						
						<button type='submit'>
							<span className="circle" aria-hidden="true">
								<span className="arrow"></span>
							</span>
							<span className="buttonText">ENVIAR</span>
						</button>
					</form>
				</div>
			</StyledContainer>
		</StyledContact>
	)
}
