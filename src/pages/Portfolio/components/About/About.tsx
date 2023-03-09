import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { iIdProps } from '../../Portfolio'
import photo from '../../../../assets/photo.png'
import { ContactCTA } from '../../../../components/ContactCTA/ContactCTA'

export function About ({ id }: iIdProps): JSX.Element {
	return (
		<section id={id}>
			<StyledContainer>
				<h2>Sobre Mim</h2>
				<div>
					<figure>
						<img src={photo} alt="" />
					</figure>

					<div>
						<p>
							Eu ajudo empresas e indivíduos a criarem sites visualmente atraentes e amigáveis ao usuário, para que possam cultivar a fidelidade do cliente para com a empresa, construir uma significativa presença online e aumentar suas taxas de engajamento; além de também preservar a credibilidade da companhia e impulsionar o crescimento de seus negócios.
						</p>
						<p>
							Olá! Meu nome é Gabriel Pavão, e sou um Desenvolvedor Front End com 1 ano de experiência em criar soluções web de alta qualidade e performance.
						</p>
						<p>
							Sendo assim, meu foco está sempre em montar interfaces atraentes e intuitivas que proporcionem uma experiência de usuário excepcional. Meu conhecimento em HTML, CSS, JavaScript e React me permite construir páginas responsivas, animações dinâmicas e outras funcionalidades para garantir que os usuários aproveitem ao máximo o seu contato com o site.
						</p>
						<p>
							Ao longo da minha carreira, trabalhei em uma variedade de projetos desafiadores, desde pequenos sites estáticos até plataformas web complexas e altamente escaláveis. Amo aprender coisas novas e estou sempre em busca de maneiras de aprimorar minhas habilidades e conhecimentos.
						</p>
						<p>
							Portanto, que tal criarmos algo incrível juntos? Me contate por email ou conecte-se comigo pelo Linkedin, terei o maior prazer em responder.
						</p>
					</div>
				</div>

				<ContactCTA styleOption='secondary'/>
			</StyledContainer>
		</section>
	)
}