// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// Pages
import { Home } from './pages';
// Constants
import * as ROUTES from './constants/routes';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
