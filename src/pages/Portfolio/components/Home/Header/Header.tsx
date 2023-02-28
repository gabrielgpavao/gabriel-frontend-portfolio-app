import React from 'react';
import { MdEmail } from 'react-icons/md';
import { ImGithub } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';

export function Header(): JSX.Element {
    return (
        <header>
            <h1>
                <span>GABRIEL</span>
                <span>\</span>PAVÃO
            </h1>

            <nav>
                <ul>
                    <li>
                        <a href={'#home'}>Início</a>
                    </li>
                    <li>
                        <a href={'#about'}>Sobre Mim</a>
                    </li>
                    <li>
                        <a href={'#projects'}>Projetos</a>
                    </li>
                    <li>
                        <a href={'#technologies'}>Tecnologias</a>
                    </li>
                    <li>
                        <a href={'#contact'}>Contato</a>
                    </li>
                </ul>
            </nav>

            <aside>
                <ul>
                    <li>
                        <MdEmail color={'var(--blue5)'} />
                    </li>
                    <li>
                        <ImGithub color={'var(--blue5)'} />
                    </li>
                    <li>
                        <BsLinkedin color={'var(--blue5)'} />
                    </li>
                </ul>

                <div>
                    <small>CONTACT ME</small>
                </div>
            </aside>
        </header>
    );
}
