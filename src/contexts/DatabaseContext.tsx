import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { iDatabaseProviderValues, iProject, iProviderChildrenProps } from './interfaces';

export const DatabaseContext: React.Context<iDatabaseProviderValues> = createContext({} as iDatabaseProviderValues)

export function DatabaseProvider ({ children }: iProviderChildrenProps): JSX.Element {
	const [projects, setProjects] = useState<iProject[]>([])

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
