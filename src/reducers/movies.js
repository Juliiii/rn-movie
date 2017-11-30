import * as actionTypes from '../actionTypes/movies';
import { Map, List } from 'immutable';

let initState = Map({
	loading: false,
	data: List([])
});

const movies = (state = initState, action) => {
	switch(action.type) {
	case actionTypes.GETMOVIES:
		state = state.set('loading', true);
		break;
	case actionTypes.GETMOVIES_SUCCESS:
		state = state.set('loading', false);
		state = state.set('data', List(action.data));
		break;
	case actionTypes.GETMOVIES_FAIL:
		state = state.set('loading', false);
		break;
	}
	return state;
};

export default movies;