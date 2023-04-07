import React from 'react';

export interface iProviderChildrenProps {
	children: React.ReactNode;
}

export interface iDatabaseProviderValues {
	projects: Array<iProject>;
	setProjects: React.Dispatch<React.SetStateAction<iProject[]>>;
}

export interface iProject {
	id: number;
	name: string;
	description: string;
	responsive: boolean;
	websiteUrl: string;
	repositoryUrl: string;
	backgroundImg: string;
	technologies: Array<tTechnologies>;
}

export type tTechnologies = 'React' | 'TypeScript' | 'JavaScript' | 'Styled-Components' | 'Node' | 'Express' | 'Python' | 'Django' | 'PostgreSQL'
