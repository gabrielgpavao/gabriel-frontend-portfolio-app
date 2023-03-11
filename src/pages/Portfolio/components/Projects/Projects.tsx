import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { iIdProps } from '../../Portfolio'
import { ImGithub } from 'react-icons/im';
import { FiExternalLink } from 'react-icons/fi';

export function Projects ({ id }: iIdProps): JSX.Element {
	return (
		<section id={id}>
			<StyledContainer>
				<StyledSectionTitle>Últimos Projetos</StyledSectionTitle>
				<a href='https://github.com/gabrielgpavao'>Acessar projetos <ImGithub/> &rarr;</a>
				<ul>
					<li className='flipCard'>
						<div className='flipCardInner'>
							<div className='front'>
								<h3>Nome do Projeto</h3>
								<small>Saiba mais</small>
							</div>

							<div className='back'>
								<h3>Nome do Projeto</h3>
								<div>Techs</div>
								<button>
									<a href='' target={'_blank'}>
										Site
										<FiExternalLink/>
									</a>
								</button>
								<button>
									<a href='' target={'_blank'}>
										Repositório
										<ImGithub/>
									</a>
								</button>
							</div>
						</div>
					</li>
				</ul>
			</StyledContainer>
		</section>
	)
}