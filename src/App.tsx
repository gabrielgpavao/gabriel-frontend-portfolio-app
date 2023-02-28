import React from 'react';
import { DatabaseProvider } from './contexts/DatabaseContext';
import { Portfolio } from './pages/Portfolio/Portfolio';

export function App(): JSX.Element {
    return (
        <DatabaseProvider>
            <Portfolio />
        </DatabaseProvider>
    );
}
