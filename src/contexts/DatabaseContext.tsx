import React, { createContext } from 'react';
import { iProviderChildrenProps } from './interfaces';

export const DatabaseContext = createContext({})

export function DatabaseProvider ({ children }: iProviderChildrenProps) {
	return (
		<DatabaseContext.Provider value={{}}>
			{children}
		</DatabaseContext.Provider>
	)
}
