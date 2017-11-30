import * as actionTypes from '../actionTypes/city';

export const selectCity = ({name, locationId}) => ({
	type: actionTypes.SELECTCITY,
	name,
	locationId
});
