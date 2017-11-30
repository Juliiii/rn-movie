import * as reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import RootNavigator from '../router/routes';
import { fromJS } from 'immutable';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const initAction = RootNavigator.router.getActionForPathAndParams('Main');
const initState = fromJS(RootNavigator.router.getStateForAction(initAction));
const nav = (state = initState, action) => {
	const nextState = state.merge(RootNavigator.router.getStateForAction(action, state.toJS()));
	return nextState || state;	
};

const rootReducers = combineReducers({
	...reducers,
	nav
});

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));

for (const saga of sagas) {
	sagaMiddleware.run(saga);
}

export default store;
