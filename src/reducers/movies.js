import * as actionTypes from '../actionTypes/movies';

const movies = (state = {}, action) => {
	switch(action.type) {
	case actionTypes.GETMOVIES:
		return {
			...state,
			loading: true
		};
	case actionTypes.GETMOVIES_SUCCESS:
		return {
			...state,
			loading: false,
			data: action.data
		};
	case actionTypes.GETMOVIES_FAIL:
		return {
			...state,
			loading: false
		};
	default:
		return state;
	}
};

export default movies;