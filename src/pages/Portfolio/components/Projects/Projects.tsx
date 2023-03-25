import React, { useContext } from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { iIdProps } from '../../Portfolio'
import { ImGithub } from 'react-icons/im';
import { StyledProjects } from './StyledProjects';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { DatabaseContext } from '../../../../contexts/DatabaseContext';
import { ContactCTA } from '../../../../components/ContactCTA/ContactCTA';

export function Projects ({ id }: iIdProps): JSX.Element {
	const { projects } = useContext(DatabaseContext)
	
	return (
		<StyledProjects id={id}>
			<StyledContainer>
				<StyledSectionTitle>Últimos Projetos</StyledSectionTitle>

				<span>
					<a href='https://github.com/gabrielgpavao' target={'_blank'}>Acessar projetos <ImGithub/>&rarr;</a>
				</span>
				<ul>
					{projects.map((project) => <ProjectCard key={project.id} project={project}/>)}
				</ul>

				<div className='containerCTA'>
					<ContactCTA styleOption='secondary'/>
				</div>
			</StyledContainer>
		</StyledProjects>
	)
}
