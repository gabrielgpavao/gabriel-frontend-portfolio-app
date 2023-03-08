import React, { createContext } from 'react';
import { iProviderChildrenProps } from './interfaces';

export const DatabaseContext: React.Context<{}> = createContext({})

export function DatabaseProvider ({ children }: iProviderChildrenProps): JSX.Element {
	return (
		<DatabaseContext.Provider value={{}}>
			{children}
		</DatabaseContext.Provider>
	)
}
