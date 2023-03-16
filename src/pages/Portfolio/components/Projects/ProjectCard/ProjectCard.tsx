import React from 'react'
import { StyleProjectCard } from './StyledProjectCard'
import { AiOutlineDesktop } from 'react-icons/ai'
import { BiMobileAlt } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { ImGithub } from 'react-icons/im';
import { SiStyledcomponents, SiTypescript } from 'react-icons/si';

export function ProjectCard (): JSX.Element {
	return (
		<StyleProjectCard>
			<div>
				<div className='frontFace'>
					<h3>League of Match</h3>
					<small>Saiba mais</small>
					<div>
						<AiOutlineDesktop size={25}/>
						<BiMobileAlt size={23}/>
					</div>
				</div>

				<div className='backFace'>
					<div className='backFaceContent'>
						<div>
							<h3>League of Match</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus neque enim quia reiciendis a soluta debiti</p>

							<p>Feito com:</p>
							<div className='techIcons'>
								<FaReact size={22} color='#61dafb' title={'React.js'}/>
								<SiTypescript size={20} color='#27609e' title={'TypeScript'}/>
								<SiStyledcomponents size={40} title={'Styled-Components'}/>
							</div>
						</div>

						<div>
							<button className='seeWebsite'>
								<small>Ver Site</small>
								<FiExternalLink size={18}/>
							</button>
							<button className='seeRepo'>
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
