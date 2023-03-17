import React from 'react';
import { tTechnologies } from '../../../../../contexts/interfaces';
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiTypescript, SiJavascript, SiDjango, SiPostgresql } from 'react-icons/si';
import styledComponentIcon from '../../../../../assets/styledComponentIcon.svg'
import expressIcon from '../../../../../assets/expressIcon.svg'
import pythonIcon from '../../../../../assets/pythonIcon.svg'
import postgreIcon from '../../../../../assets/postgreIcon.svg'

interface iTechnologyIconProps {
	projectTechs: Array<tTechnologies>
}

export function TechnologyIcon ({ projectTechs }: iTechnologyIconProps): JSX.Element {
	return (
		<>
			{projectTechs.includes('React') && <FaReact size={22} color='#61dafb' title={'React.js'}/>}
			{projectTechs.includes('TypeScript') && <SiTypescript size={20} color='#27609e' title={'TypeScript'}/>}
			{projectTechs.includes('JavaScript') && <SiJavascript size={20} color='#f7df1e' title={'JavaScript'}/>}
			{projectTechs.includes('Styled-Components') && <img src={styledComponentIcon} style={{height: '22px', marginRight:'-4px'}} title={'Styled-Components'}/>}
			{projectTechs.includes('Node') && <GrNode color='#89bb3c' size={22} title={'Node.js'}/>}
			{projectTechs.includes('Express') && <img src={expressIcon} style={{height: '28px'}} title={'Express.js'}/>}
			{projectTechs.includes('Python') && <img src={pythonIcon} style={{height: '26px'}} title={'Python'}/>}
			{projectTechs.includes('Django') && <SiDjango color='#ffffff' size={16} style={{backgroundColor: '#0C4B33', borderRadius: '5px', padding: '3px'}} title={'Django'}/>}
			{projectTechs.includes('PostgreSQL') && <img src={postgreIcon} style={{marginLeft: '-3px'}} title={'PostgreSQL'}/>}
		</>
	)
}
