import * as actionTypes from '../actionTypes/city';

export const selectCity = ({name, locationId}) => ({
	type: actionTypes.SELECTCITY,
	name,
	locationId
});

export const updateCity = ({name, locationId}) => ({
	type: actionTypes.UPDATECITY,
	name,
	locationId
});

export const locateCity = ({name, locationId}) => ({
	type: actionTypes.LOCATECITY,
	name,
	locationId
});
