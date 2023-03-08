import React from 'react';
import { Home } from './components/Home/Home';

export interface iIdProps {
    id: string;
}

export function Portfolio(): JSX.Element {
    return (
		<>
			<Home id={'home'}/>
		</>
	);
}
