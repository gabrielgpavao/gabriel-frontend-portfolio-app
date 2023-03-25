import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
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
			technologies: ['React', 'TypeScript', 'Styled-Components', 'Node', 'Express', 'PostgreSQL']
		}
	])

	async function getAllProjects (): Promise<void> {
		try {
			const response = await api.get('/projects')
			setProjects(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		async function handleGetProjects (): Promise<void> {
			await getAllProjects()
		}
		
		handleGetProjects()
	}, [])
	
	return (
		<DatabaseContext.Provider value={{ projects, setProjects }}>
			{children}
		</DatabaseContext.Provider>
	)
}
