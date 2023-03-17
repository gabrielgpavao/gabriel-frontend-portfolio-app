import React from 'react';
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';

export interface iIdProps {
    id: string;
}

export function Portfolio(): JSX.Element {
    return (
		<>
			<Home id={'home'}/>
			<About id={'about'}/>
			<Projects id={'projects'}/>
		</>
	);
}
