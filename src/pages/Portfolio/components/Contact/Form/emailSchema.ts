import * as yup from 'yup';

export const emailSchema = yup.object().shape({
    name: yup
        .string()
        .required('Digite seu nome'),
    from: yup
        .string()
		.email('Email inválido')
        .required('Digite seu email'),
	subject: yup
		.string()
		.required('Digite o assunto da mensagem'),
	text: yup
		.string()
		.required('Digite sua mensagem')
})
