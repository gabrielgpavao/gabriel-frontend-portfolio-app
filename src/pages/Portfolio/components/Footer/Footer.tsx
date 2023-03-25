import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { MdEmail } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';

export function Footer (): JSX.Element {
	return (
		<section>
			<StyledContainer>
				<div>
					<h3><span>GABRIEL</span> PAVÃO</h3>
					<nav>
						<ul>
							<li>
								<a href="#home">Início</a>
							</li>
							<li>
								<a href="#about">Sobre Mim</a>
							</li>
							<li>
								<a href="#projects">Projetos</a>
							</li>
							<li>
								<a href="#technologies">Technologias</a>
							</li>
							<li>
								<a href="#contact">Contato</a>
							</li>
						</ul>
					</nav>
					<div>
						<a href='mailto:gabpavao@outlook.com'>
							<MdEmail title={'E-mail'}/>
						</a>
						<a href='https://github.com/gabrielgpavao' target={'_blank'}>
							<ImGithub title={'GitHub'}/>
						</a>
						<a href='https://www.linkedin.com/in/gabrielgpavao/' target={'_blank'}>
							<BsLinkedin title={'Linkedin'}/>
						</a>
					</div>
				</div>
				<p>Feito com 🧡 por Gabriel Pavão</p>
			</StyledContainer>
		</section>
	)
}
