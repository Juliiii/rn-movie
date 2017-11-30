import * as actionTypes from '../actionTypes/movies';

export const getHotPlayMovies = ({locationId}) => ({
	type: actionTypes.GETHOTPLAYMOVIES,
	locationId
});

export const getHotPlayMovies_Success = ({data}) => ({
	type: actionTypes.GETHOTPLAYMOVIES_SUCCESS,
	data
});

export const getHotPlayMovies_Fail = () => ({
	type: actionTypes.GETHOTPLAYMOVIES_FAIL
});

export const getComingnewMovies = ({locationId}) => ({
	type: actionTypes.GETCOMINGNEWMOVIES,
	locationId
});

export const getComingnewMovies_Success = ({comingNewMovies, hopefulMovies}) => ({
	type: actionTypes.GETCOMINGNEWMOVIES_SUCCESS,
	comingNewMovies,
	hopefulMovies
});

export const getComingnewMovies_Fail = () => ({
	type: actionTypes.GETCOMINGNEWMOVIES_FAIL
});
