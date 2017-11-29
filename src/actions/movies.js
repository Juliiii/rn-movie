import * as actionTypes from '../actionTypes/movies';

export const getMovies = ({locationId}) => ({
	type: actionTypes.GETMOVIES,
	locationId
});

export const getMovies_Success = ({data}) => ({
	type: actionTypes.GETMOVIES_SUCCESS,
	data
});

export const getMovies_Fail = () => ({
	type: actionTypes.GETMOVIES_FAIL
});
