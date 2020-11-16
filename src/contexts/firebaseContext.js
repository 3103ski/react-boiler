import React, { createContext } from 'react';
import { firebase } from '../lib/firebase.prod';

const FirebaseContext = createContext(null);

function FirebaseContentProvider(props) {
	return <FirebaseContext.Provider value={{ firebase }}>{props.children}</FirebaseContext.Provider>;
}

export { FirebaseContext, FirebaseContentProvider };
