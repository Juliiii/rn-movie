import * as actionTypes from '../actionTypes/movies';
import { Map, List } from 'immutable';

let initState = Map({
	loading: false,
	hotplayMovies: List([]),
	comingNewMovies: List([]),
	hopefulMovies: List([])
});

const movies = (state = initState, action) => {
	switch(action.type) {
	case actionTypes.GETCOMINGNEWMOVIES:
	case actionTypes.GETHOTPLAYMOVIES:
		state = state.set('loading', true);
		break;
	case actionTypes.GETHOTPLAYMOVIES_SUCCESS:
		state = state.set('loading', false);
		state = state.set('hotplayMovies', List(action.data));
		break;
	case actionTypes.GETCOMINGNEWMOVIES_SUCCESS:
		state = state.set('loading', false);
		state = state.set('comingNewMovies', List(action.comingNewMovies));
		state = state.set('hopefulMovies', List(action.hopefulMovies));
		break;
	case actionTypes.GETCOMINGNEWMOVIES_FAIL:
	case actionTypes.GETHOTPLAYMOVIES_FAIL:
		state = state.set('loading', false);
		break;
	}
	return state;
};

export default movies;