import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BabeIndexContainer from './babe/babe_index_container';
import BabeShowContainer from './babe/babe_show_container';

// TODO Need to add other routes here.
const App = () => (
	<Switch>
		<Route exact path="/" component={BabeIndexContainer} />
		<Route exact path="/babes" component={BabeIndexContainer} />
		<Route exact path="/babes/:babeId" component={BabeShowContainer} />
		<Route component={BabeIndexContainer} />
	</Switch>
);

export default App;