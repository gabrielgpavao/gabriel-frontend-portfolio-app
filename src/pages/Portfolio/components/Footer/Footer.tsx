import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { MdEmail } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { NavMenu } from '../../../../components/NavMenu/NavMenu';

export function Footer (): JSX.Element {
	return (
		<section>
			<StyledContainer>
				<div>
					<h3><span>GABRIEL</span> PAVÃO</h3>
					<NavMenu/>
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
