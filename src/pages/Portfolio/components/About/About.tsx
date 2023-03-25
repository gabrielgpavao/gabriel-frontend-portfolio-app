import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { iIdProps } from '../../Portfolio'
import { ContactCTA } from '../../../../components/ContactCTA/ContactCTA'
import { StyledAbout } from './StyledAbout'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { RiMessage3Line } from 'react-icons/ri'
import { MdOutlineContactPage } from 'react-icons/md'
import gabrielCV from '../../../../../src/assets/gabrielCV.pdf'
import profilePhoto from '../../../../assets/profilePhoto.png'

export function About ({ id }: iIdProps): JSX.Element {
	return (
		<StyledAbout id={id}>
			<StyledContainer>
				<StyledSectionTitle>Sobre Mim</StyledSectionTitle>
				<div className='flexLayout'>
					<figure>
						<img src={profilePhoto} alt="Foto do Gabriel" />
					</figure>

					<div>
						<p>
							Olá! Meu nome é Gabriel Pavão, e sou um Desenvolvedor Front End com 1 ano de experiência em executar soluções web de alta qualidade e performance.
						</p>
						<p>
							Ajudo empresas a criarem sites visualmente envolventes e amigáveis ao usuário, para que possam cultivar a fidelidade do cliente para com a empresa, construir uma significativa presença online e aumentar suas taxas de engajamento; além de também preservar a credibilidade da companhia e impulsionar o crescimento de seus negócios.
						</p>
						<p>
							Como? Por meio da montagem de interfaces intuitivas, elaboração de páginas responsivas, animações dinâmicas e lógica de programação, a fim de garantir que os usuários aproveitem ao máximo o seu contato com o site.
						</p>
						<p>
							<span>Então, que tal desenvolvermos algo incrível juntos?</span>
						</p>

						<div>
							<button>
								<a href={gabrielCV} download={'cv-gabrielpavao-frontend-dev.pdf'}>
									<MdOutlineContactPage size={24}/>
									Download CV
								</a>
							</button>
							<button>
								<RiMessage3Line size={24}/>
								Contato
							</button>
						</div>
					</div>
				</div>

				<ContactCTA styleOption='secondary' top={'30px'}/>
			</StyledContainer>
		</StyledAbout>
	)
}
