import React from 'react'
import { StyleProjectCard } from './StyledProjectCard'
import { AiOutlineDesktop } from 'react-icons/ai'
import { BiMobileAlt } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { ImGithub } from 'react-icons/im';
import { SiStyledcomponents, SiTypescript } from 'react-icons/si';
import { iProject } from '../../../../../contexts/interfaces';
import { TechnologyIcon } from './TechnologyIcon';

interface iProjectCardProps {
	project: iProject;
}

export function ProjectCard ({ project }: iProjectCardProps): JSX.Element {
	return (
		<StyleProjectCard backgroundImg={project.backgroundImg}>
			<div>
				<div className='frontFace'>
					<h3>{project.name}</h3>
					<small>Saiba mais</small>
					<div>
						{
							project.responsive ?
							<>
								<AiOutlineDesktop size={25}/>
								<BiMobileAlt size={23}/>
							</>
							:
							<AiOutlineDesktop size={25}/>
						}
					</div>
				</div>

				<div className='backFace'>
					<div className='backFaceContent'>
						<div>
							<h3>{project.name}</h3>
							<p>{project.description}</p>

							<p>Feito com:</p>
							<div className='techIcons'>
								<TechnologyIcon projectTechs={project.technologies}/>
							</div>
						</div>

						<div>
							<button className='seeWebsite' onClick={() => {open(project.link)}}>
								<small>Ver Site</small>
								<FiExternalLink size={18}/>
							</button>
							<button className='seeRepo' onClick={() => {open(project.repository)}}>
								<small>Repositório</small>
								<ImGithub size={18}/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</StyleProjectCard>
	)
}
