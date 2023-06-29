import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { iIdProps } from '../../Portfolio'
import { ContactCTA } from '../../../../components/ContactCTA/ContactCTA'
import { StyledAbout } from './StyledAbout'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { RiMessage3Line } from 'react-icons/ri'
import { MdOutlineContactPage } from 'react-icons/md'
import gabrielCV from '../../../../../src/assets/gabrielCV.pdf'
import profilePhoto from '../../../../assets/page/profilePhoto.png'

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
							Olá! Meu nome é Gabriel Pavão, e sou um Desenvolvedor Full Stack com 1 ano de experiência em executar soluções web de alta qualidade e performance.
						</p>
						<p>
							Ajudo empresas a criarem aplicações web excepcionais ao usuário, ágeis e funcionais, para que possam cultivar a fidelidade do cliente para com a empresa e construir uma significativa presença online.
						</p>
						<p>
							Portanto, que mais me entusiasma é o desafio de criar soluções web para diferentes regras de negócio de maneira harmoniosa.
						</p>
						<p>
							<span>Então, que tal desenvolvermos algo incrível juntos?</span>
						</p>

						<div>
							<button>
								<a href={gabrielCV} download={'GabrielPavão-DesenvolvedorFrontend.pdf'}>
									<MdOutlineContactPage size={24}/>
									Download CV
								</a>
							</button>
							<button>
								<a href="#contact">
									<RiMessage3Line size={24}/>
									Contato
								</a>
							</button>
						</div>
					</div>
				</div>

				<div className='containerCTA'>
					<ContactCTA styleOption='secondary'/>
				</div>
			</StyledContainer>
		</StyledAbout>
	)
}
