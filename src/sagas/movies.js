import { take, put, call, fork } from 'redux-saga/effects';
import api from '../apis/movies';
import * as actionTypes from '../actionTypes/movies';
import * as action from '../actions/movies';

/**********************        work      ***********************/

export function* getHotPlayMovies(locationId) {
	try {
		const data = yield api.getHotPlayMovies({locationId});
		yield put(action.getMovies_Success({data: data.ms}));
	} catch (err) {
		yield put(action.getMovies_Fail());
	}
}

export function* getComingnewMovies(locationId) {
	try {
		const data = yield api.getComingNewMovies({locationId});
		yield put(action.getMovies_Success({data: data.ms}));
	} catch (err) {
		yield put(action.getMovies_Fail());
	}
}


/**********************        watch      ***********************/

export function* watchGetHotPlayMovies() {
	while(true) {
		const { locationId } = yield take(actionTypes.GETMOVIES);
		yield call(getHotPlayMovies, locationId);
	}
}

export function* watchComingnewMovies() {
	while(true) {
		const { locationId } = yield take(actionTypes.GETCOMINGNEWMOVIES);
		yield call(getComingnewMovies, locationId);
	}
}



export default function* root() {
	yield fork(watchGetHotPlayMovies);
	yield fork(watchComingnewMovies);
}
