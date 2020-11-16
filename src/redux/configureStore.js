// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createForms } from 'react-redux-form';

// Form reducers for initial states

// Middleware
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

export const ConfigureStoreForForms = () => {
	const store = createStore(combineReducers({}), applyMiddleware(thunk));
	return store;
};
