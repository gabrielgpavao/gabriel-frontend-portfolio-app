import React from 'react';
import { StyledTechnologies } from './StyledTechnologies';
import Marquee from 'react-fast-marquee';
import { FaReact, FaSass } from 'react-icons/fa';
import { GrNode, GrDocker } from 'react-icons/gr';
import { SiTypescript, SiJavascript, SiDjango, SiRedux, SiHtml5, SiCss3, SiGit, SiGithub, SiEslint, SiTailwindcss, SiNestjs, SiMocha, SiPrisma } from 'react-icons/si';
import { ImTree } from 'react-icons/im'
import nextjsIcon from '../../../../assets/icons/nextjsIcon.svg'
import styledComponentIcon from '../../../../assets/icons/styledComponentIcon.svg'
import expressIcon from '../../../../assets/icons/expressIcon.svg'
import pythonIcon from '../../../../assets/icons/pythonIcon.svg'
import postgreIcon from '../../../../assets/icons/postgreIcon.svg'
import responsivityIcon from '../../../../assets/icons/responsivityIcon.svg'
import figmaIcon from '../../../../assets/icons/figmaIcon.svg'
import jestIcon from '../../../../assets/icons/jestIcon.svg'
import typeormIcon from '../../../../assets/icons/typeormIcon.svg'
import { StyledContainer } from '../../../../styles/Container';

export function Technologies (): JSX.Element {
	return (
		<StyledTechnologies>
			<StyledContainer>
				<h3>Tecnologias</h3>

			</StyledContainer>
			
			<Marquee
				direction='right'
				loop={0}
				speed={80}
				pauseOnHover
				gradient
				gradientColor={[1, 24, 37]}
			>
				<div className='techList'>
					<FaReact size={38} color='#61dafb' title={'React.js'}/>
					<img src={nextjsIcon} style={{height: 38}} title={'Next'}/>
					<GrNode color='#89bb3c' size={35} title={'Node.js'}/>
					<img src={expressIcon} style={{height: 35}} title={'Express.js'}/>
					<SiNestjs size={32} color='#e0234e' title='Nest.js'/>
					<SiDjango color='#ffffff' size={28} style={{backgroundColor: '#0C4B33', borderRadius: '5px', padding: '3px'}} title={'Django'}/>
					<SiTypescript size={35} color='#27609e' title={'TypeScript'}/>
					<SiJavascript size={35} color='#f7df1e' title={'JavaScript'}/>
					<img src={pythonIcon} style={{height: 35}} title={'Python'}/>
					<GrDocker size={48} color='#2496ed' title='Docker'/>
					<img src={typeormIcon} style={{height: 32}} title='TypeORM'/>
					<SiPrisma size={35} color='#ffffff' title='Prisma'/>
					<img src={postgreIcon} style={{height: 43}} title={'PostgreSQL'}/>
					<img src={styledComponentIcon} style={{height: 35}} title={'Styled-Components'}/>
					<FaSass size={42} color='#bf4080' title={'SASS'}/>
					<SiTailwindcss size={40} color='#38bdf8' title='TailwindCSS'/>
					<ImTree size={35} color='#e6e6e6' title={'ContextAPI'}/>
					<SiRedux size={35} color='#7e57c2' title={'Redux'}/>
					<SiHtml5 size={35} color='#fc6041' title={'HTML'}/>
					<SiCss3 size={35} color='#35a0df' title={'CSS'}/>
					<SiGit size={35} color='#f64d27' title={'Git'}/>
					<SiGithub size={35} color='#ffffff' title={'GitHub'}/>
					<img src={responsivityIcon} style={{height: 35}} title={'Interface Responsiva'}/>
					<img src={figmaIcon} style={{height: 38}} title={'Figma'}/>
					<SiEslint size={35} color='#4930c0' title={'ESLint'}/>
					<SiMocha size={38} color='#8d6748' title='Mocha'/>
					<img src={jestIcon} style={{height: 35, marginRight: 20}} title={'Jest'}/>
				</div>
			</Marquee>
		</StyledTechnologies>
	)
}
