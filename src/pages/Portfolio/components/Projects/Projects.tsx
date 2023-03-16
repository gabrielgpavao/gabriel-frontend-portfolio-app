import React from 'react'
import { StyledContainer } from '../../../../styles/Container'
import { StyledSectionTitle } from '../../../../styles/SectionTitle'
import { iIdProps } from '../../Portfolio'
import { ImGithub } from 'react-icons/im';
import { StyledProjects } from './StyledProjects';
import { ProjectCard } from './ProjectCard/ProjectCard';

export function Projects ({ id }: iIdProps): JSX.Element {
	return (
		<StyledProjects id={id}>
			<StyledContainer>
				<StyledSectionTitle>Últimos Projetos</StyledSectionTitle>

				<span>
					<a href='https://github.com/gabrielgpavao' target={'_blank'}>Acessar projetos <ImGithub/>&rarr;</a>
				</span>
				<ul>
					<ProjectCard/>
				</ul>
			</StyledContainer>
		</StyledProjects>
	)
}
