import React from 'react';
import { iStyledContactProps, StyledContact } from './StyledContact';
import { IoMdArrowUp } from 'react-icons/io'

export function ContactPrimary ({ top = 0, right = 0, bottom = 0, left = 0 }: iStyledContactProps): JSX.Element {
	const textCharacters: string[] = 'CONTACT NOW CONTACT NOW'.split('')
	return (
		<StyledContact top={top} right={right} bottom={bottom} left={left}>
			<IoMdArrowUp size={65}/>
			<div className='text'>
				<small>{
					textCharacters.map((char, index) => <span style={{transform: `rotate(${index * 15}deg)`}}>{char}</span>)
				}</small>
			</div>
		</StyledContact>
	)
}