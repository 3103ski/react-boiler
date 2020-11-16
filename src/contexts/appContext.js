import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContentProvider = (props) => {
	const [state, setState] = useState({
		isLoading: true,
	});

	return <AppContext.Provider value={[state, setState]}>{props.children}</AppContext.Provider>;
};

export { AppContext, AppContentProvider };
