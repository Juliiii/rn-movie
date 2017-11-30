import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './router';
import store from './store';

const App = () => (
	<Provider store={store}>
		<RootNavigator />
	</Provider>
);

export default App;
