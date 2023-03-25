import { StyledNavMenu } from './StyledNavMenu';

export function NavMenu () {
	return (
		<StyledNavMenu>
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
		</StyledNavMenu>
	)
}