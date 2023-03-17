import React, { createContext, useState } from 'react';
import { iDatabaseProviderValues, iProject, iProviderChildrenProps } from './interfaces';

export const DatabaseContext: React.Context<iDatabaseProviderValues> = createContext({} as iDatabaseProviderValues)

export function DatabaseProvider ({ children }: iProviderChildrenProps): JSX.Element {
	const [projects, setProjects] = useState<iProject[]>([
		{
			id: 1,
			name:'League of Match',
			description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odio sunt dicta aliquid quod distinctio dolore repellendus atque, eveniet',
			responsive: true,
			link: '',
			repository: '',
			backgroundImg: 'https://i.imgur.com/7ZMUbgj.png',
			technologies: ['React', 'TypeScript', 'Styled-Components']
		}
	])
	
	return (
		<DatabaseContext.Provider value={{ projects, setProjects}}>
			{children}
		</DatabaseContext.Provider>
	)
}
