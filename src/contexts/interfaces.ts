import React from 'react';

export interface iProviderChildrenProps {
	children: React.ReactNode;
}

export interface iDatabaseProviderValues {
	projects: Array<iProject>;
	setProjects: React.Dispatch<React.SetStateAction<iProject[]>>;
	sendEmailRequest: (emailData: iEmailRequestData) => Promise<void>;
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

export interface iEmailRequestData {
	name: string;
	from: string;
	subject: string;
	text: string;
}
