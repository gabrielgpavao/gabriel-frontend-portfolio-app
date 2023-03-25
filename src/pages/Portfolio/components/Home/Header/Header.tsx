import React from 'react';
import { MdEmail } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { StyledHeader } from './StyledHeader';
import { NavMenu } from '../../../../../components/NavMenu/NavMenu';

export function Header(): JSX.Element {
    return (
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
        </StyledHeader>
    );
}
