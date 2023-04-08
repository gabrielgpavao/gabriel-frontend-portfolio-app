import React, { useContext, useState } from 'react';
import { StyledContactForm } from './StyledContactForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DatabaseContext } from '../../../../../contexts/DatabaseContext';
import { yupResolver } from '@hookform/resolvers/yup'
import { emailSchema } from './emailSchema';
import toast from 'react-hot-toast'

type tEvent = React.FocusEvent<HTMLInputElement, Element> | React.FocusEvent<HTMLTextAreaElement, Element>

interface iFormData {
	name: string;
	from: string;
	subject: string;
	text: string;
} 

export function ContactForm (): JSX.Element {
	const [hasNameValue, setHasNameValue] = useState<boolean>(false)
	const [hasEmailValue, setHasEmailValue] = useState<boolean>(false)
	const [hasSubjectValue, setHasSubjectValue] = useState<boolean>(false)
	const [hasMessageValue, setHasMessageValue] = useState<boolean>(false)
	const { sendEmailRequest } = useContext(DatabaseContext)
	
	function handleValue (setState: (value: boolean) => void, event: tEvent): void {
		if (event.target.value) {
			setState(true)
		} else {
			setState(false)
		}
	}

	const { register, handleSubmit, reset, formState: { errors }} = useForm<iFormData>({
		mode: 'onSubmit',
		resolver: yupResolver(emailSchema)
	})

	const submitEmail : SubmitHandler<iFormData> = (data: iFormData) => {
        sendEmailRequest(data)
		reset()

		toast.success('Email enviado!', {
			style: {
				backgroundColor: 'var(--blue3)',
				color: 'var(--blue6)'
			}
		})
    }
	
	function handleErrorsToast () {
		const toastStyle = {
			style: {
				backgroundColor: 'var(--blue3)',
				color: 'var(--orange2)'
			} 
		}
		
		if (errors.name) {
			toast.error(errors.name.message!, toastStyle)
		} else if (errors.from) {
			toast.error(errors.from.message!, toastStyle)
		} else if (errors.subject) {
			toast.error(errors.subject.message!, toastStyle)
		} else if (errors.text) {
			toast.error(errors.text.message!, toastStyle)
		}
	}
	
	return (
		<StyledContactForm onSubmit={handleSubmit(submitEmail)} noValidate hasNameValue={hasNameValue} hasEmailValue={hasEmailValue} hasSubjectValue={hasSubjectValue} hasMessageValue={hasMessageValue}>
			<fieldset>
				<input id='name' type="text" {...register('name')} onBlur={(event) => { handleValue(setHasNameValue, event) }} />
				<label htmlFor="name" className='nameLable'>Nome<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>

			<fieldset>
				<input id='email' type="email" {...register('from')} onBlur={(event) => {handleValue(setHasEmailValue, event)}}/>
				<label htmlFor="email" className='emailLable'>Email<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>

			<fieldset>
				<input id='subject' type="text" {...register('subject')} onBlur={(event) => {handleValue(setHasSubjectValue, event)}}/>
				<label htmlFor="subject" className='subjectLable'>Assunto<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>

			<fieldset>
				<textarea id="message" rows={1.5} {...register('text')} onBlur={(event) => {handleValue(setHasMessageValue, event)}}></textarea>
				<label htmlFor="message" className='messageLable'>Mensagem<span>*</span></label>
				<span className='highlight'></span>
			</fieldset>
			
			<button type='submit' onClick={handleErrorsToast}>
				<span className="circle" aria-hidden="true">
					<span className="arrow"></span>
				</span>
				<span className="buttonText">ENVIAR</span>
			</button>
		</StyledContactForm>
	)	
}
