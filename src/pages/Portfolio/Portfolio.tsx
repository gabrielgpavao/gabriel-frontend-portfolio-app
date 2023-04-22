import React from 'react';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Toaster } from 'react-hot-toast';
import { MenuModal } from '../../components/MenuModal/MenuModal';

export interface iIdProps {
    id: string;
}

export function Portfolio(): JSX.Element {
    return (
		<>
			<Toaster
				position='top-right'
			/>
			<MenuModal/>
			<Home id={'home'}/>
			<About id={'about'}/>
			<Projects id={'projects'}/>
			<Contact id={'contact'}/>
			<Footer/>
		</>
	);
}
