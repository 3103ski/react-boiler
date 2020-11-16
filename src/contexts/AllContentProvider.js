import React from 'react';
import { FirebaseContentProvider } from './firebaseContext';
import { AppContentProvider } from './appContext';

export default function AllContentProvider({ children, ...restProps }) {
	return (
		<FirebaseContentProvider>
			<AppContentProvider>{children}</AppContentProvider>
		</FirebaseContentProvider>
	);
}
