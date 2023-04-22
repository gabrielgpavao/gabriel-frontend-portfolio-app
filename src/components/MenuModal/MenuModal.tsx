import React from 'react'
import { NavMenu } from '../NavMenu/NavMenu'
import { StyledMenuModal } from './StyledMenuModal'
import { MdEmail } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';

export function MenuModal (): JSX.Element {
	return (
		<StyledMenuModal>
			<section>
				<NavMenu/>
				<div>
					<h3>Sentindo-se Social?</h3>
					<div>
						<a href='https://www.linkedin.com/in/gabrielgpavao/' target={'_blank'}>
							<BsLinkedin color={'var(--blue5)'} size={17} title={'Linkedin'}/>
							 - Linkedin
						</a>
						<a href='https://github.com/gabrielgpavao' target={'_blank'}>
							<ImGithub color={'var(--blue5)'} size={17} title={'GitHub'}/>
							- Repositórios
						</a>
						<a href='mailto:gabpavao@outlook.com'>
							<MdEmail color={'var(--blue5)'} size={18} title={'Email'}/>
							- gabpavao@outlook.com
						</a>
					</div>
				</div>
			</section>
		</StyledMenuModal>
	)
}
