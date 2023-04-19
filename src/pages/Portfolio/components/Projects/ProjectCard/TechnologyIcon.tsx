import React from 'react';
import { tTechnologies } from '../../../../../contexts/interfaces';
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiTypescript, SiJavascript, SiDjango, SiRedux, SiSass, SiHtml5 } from 'react-icons/si';
import { ImTree } from 'react-icons/im'
import nextjsIcon from '../../../../../assets/nextjsIcon.svg'
import styledComponentIcon from '../../../../../assets/styledComponentIcon.svg'
import expressIcon from '../../../../../assets/expressIcon.svg'
import pythonIcon from '../../../../../assets/pythonIcon.svg'
import postgreIcon from '../../../../../assets/postgreIcon.svg'
import reactRouterIcon from '../../../../../assets/reactRouterIcon.svg'
import reactHookFormIcon from '../../../../../assets/reactHookFormIcon.svg'

interface iTechnologyIconProps {
	projectTechs: Array<tTechnologies>
}

export function TechnologyIcon ({ projectTechs }: iTechnologyIconProps): JSX.Element {
	return (
		<>
			{projectTechs.includes('React') && <FaReact size={22} color='#61dafb' title={'React.js'}/>}
			{projectTechs.includes('ContextAPI') && <ImTree size={20} color='#e6e6e6' title={'ContextAPI'}/>}
			{projectTechs.includes('Redux') && <SiRedux size={22} color='#7e57c2' title={'Redux'}/>}
			{projectTechs.includes('Next') && <img src={nextjsIcon} style={{height: '24px'}} title={'Next'}/>}
			{projectTechs.includes('React-Router') && <img src={reactRouterIcon} style={{height: '18px'}} title={'React-Router'}/>}
			{projectTechs.includes('React-Hook-Form') && <img src={reactHookFormIcon} style={{height: '21px'}} title={'React-Hook-Form'}/>}
			{projectTechs.includes('TypeScript') && <SiTypescript size={20} color='#27609e' title={'TypeScript'}/>}
			{projectTechs.includes('JavaScript') && <SiJavascript size={20} color='#f7df1e' title={'JavaScript'}/>}
			{projectTechs.includes('Styled-Components') && <img src={styledComponentIcon} style={{height: '22px', marginRight:'-4px'}} title={'Styled-Components'}/>}
			{projectTechs.includes('SASS') && <SiSass size={21} color='#bf4080' title={'SASS'}/>}
			{projectTechs.includes('HTML') && <SiHtml5 size={21} color='#fc6041' title={'HTML'}/>}
			{projectTechs.includes('Node') && <GrNode color='#89bb3c' size={22} title={'Node.js'}/>}
			{projectTechs.includes('Express') && <img src={expressIcon} style={{height: '28px'}} title={'Express.js'}/>}
			{projectTechs.includes('Python') && <img src={pythonIcon} style={{height: '26px'}} title={'Python'}/>}
			{projectTechs.includes('Django') && <SiDjango color='#ffffff' size={16} style={{backgroundColor: '#0C4B33', borderRadius: '5px', padding: '3px'}} title={'Django'}/>}
			{projectTechs.includes('PostgreSQL') && <img src={postgreIcon} style={{marginLeft: '-3px'}} title={'PostgreSQL'}/>}
		</>
	)
}
