import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { StyledHeader } from './StyledHeader';
import { NavMenu } from '../../../../../components/NavMenu/NavMenu';
import { MenuModal } from '../../../../../components/MenuModal/MenuModal';

export function Header(): JSX.Element {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	
    return (
		<>
			{isModalOpen && <MenuModal setIsModalOpen={setIsModalOpen}/>}

			<StyledHeader>
				<h1>
					<span>GABRIEL</span> PAVÃO
				</h1>

				<NavMenu/>

				<aside>
					<a href='mailto:gabpavao@outlook.com'>
						<MdEmail color={'var(--blue5)'} size={23} title={'E-mail'}/>
					</a>
					<a href='https://github.com/gabrielgpavao' target={'_blank'}>
						<ImGithub color={'var(--blue5)'} size={23} title={'GitHub'}/>
					</a>
					<a href='https://www.linkedin.com/in/gabrielgpavao/' target={'_blank'}>
						<BsLinkedin color={'var(--blue5)'} size={21} title={'Linkedin'}/>
					</a>

					<div>
						<small>CONTACT ME</small>
					</div>
				</aside>

				<RxHamburgerMenu
					onClick={() => { setIsModalOpen(true) }}
					className='menuDropdown'
					size={30}
				/>
			</StyledHeader>
		</>
    );
}
