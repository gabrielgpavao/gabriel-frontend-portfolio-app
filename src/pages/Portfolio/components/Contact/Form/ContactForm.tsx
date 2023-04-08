import React, { useState } from 'react';
import { StyledContactForm } from './StyledContactForm';

type tEvent = React.FocusEvent<HTMLInputElement, Element> | React.FocusEvent<HTMLTextAreaElement, Element>

export function ContactForm (): JSX.Element {
	const [hasNameValue, setHasNameValue] = useState<boolean>(false)
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
		<StyledContactForm hasNameValue={hasNameValue} hasEmailValue={hasEmailValue} hasSubjectValue={hasSubjectValue} hasMessageValue={hasMessageValue}>
			<fieldset>
				<input id='name' type="text" name='name' onBlur={(event) => {handleValue(setHasNameValue, event)}}/>
				<label htmlFor="name" className='nameLable'>Nome<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>

			<fieldset>
				<input id='email' type="email" name='email' onBlur={(event) => {handleValue(setHasEmailValue, event)}}/>
				<label htmlFor="email" className='emailLable'>Email<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>

			<fieldset>
				<input id='subject' type="text" name='subject' onBlur={(event) => {handleValue(setHasSubjectValue, event)}}/>
				<label htmlFor="subject" className='subjectLable'>Assunto<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>

			<fieldset>
				<textarea id="message" name="message" rows={1.5} onBlur={(event) => {handleValue(setHasMessageValue, event)}}></textarea>
				<label htmlFor="message" className='messageLable'>Mensagem<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>
			
			<button type='submit'>
				<span className="circle" aria-hidden="true">
					<span className="arrow"></span>
				</span>
				<span className="buttonText">ENVIAR</span>
			</button>
		</StyledContactForm>
	)	
}
