import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { MdEmail } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { NavMenu } from '../../../../components/NavMenu/NavMenu';
import { StyledFooter } from './StyledFooter';

export function Footer (): JSX.Element {
	return (
		<StyledFooter>
			<StyledContainer>
				<div>
					<h3><span>GABRIEL</span> PAVÃO</h3>
					<NavMenu/>
					<div className='socialMedias'>
						<a href='mailto:gabpavao@outlook.com'>
							<MdEmail color='var(--blue6)' size={21} title={'E-mail'}/>
						</a>
						<a href='https://github.com/gabrielgpavao' target={'_blank'}>
							<ImGithub color='var(--blue6)' size={20} title={'GitHub'}/>
						</a>
						<a href='https://www.linkedin.com/in/gabrielgpavao/' target={'_blank'}>
							<BsLinkedin color='var(--blue6)' size={18} title={'Linkedin'}/>
						</a>
					</div>
				</div>
				<p>Feito com 🧡 por Gabriel Pavão</p>
			</StyledContainer>
		</StyledFooter>
	)
}
