import reducers from '../reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootNavigator from '../router/routes';

const sagaMiddleware = createSagaMiddleware();
const initState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Main'));
const nav = (state = initState, action) => {
	const nextState = RootNavigator.router.getStateForAction(action, state);
	return nextState || state;	
};

const rootReducers = combineReducers({
	...reducers, nav
});

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

export default store;
