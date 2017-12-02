import { Map, List } from 'immutable';
import * as actionTypes from '../actionTypes/city';
import db from '../utils/db';

const key = {
	currentUse: '@ASYNCSTORAGE/CURRENT_CITY',
	recentlyUse: '@ASYNCSTORAGE/RECENTLYUSE_CITY',
	location: '@ASYNCSTORAGE/CURRENT_CITY'
};

let initState = Map({
	// 当前使用的城市
	currentUse: Map({
		name: null,
		locationId: null
	}),
	// 最近使用的城市
	recentlyUse: List([]),
	// 定位所在的城市
	location: Map({
		name: null,
		locationId: null
	})
});



(async () => {
	const values = await db.multiGet(Object.values(key));
	initState = initState.set('currentUse', Map(values[0]));
	initState = initState.set('recentlyUse', List(values[1]));
	initState = initState.set('location', Map(values[2]));
})();

const city = (state = initState, action) => {
	switch(action.type) {
	case actionTypes.SELECTCITY:
		state = state.currentUse.set('name', action.name);
		state = state.currentUse.set('locationId', action.locationId);
		break;
	case actionTypes.UPDATECITY:
		if (!state.recentlyUse.find(item => item.locationId === action.locationId)) {
			if (state.recentlyUse.size === 3) {
				state = state.splice(0, 1, { name: action.name, locationId: action.locationId });
			} else {
				state = state.recentlyUse.push({name: action.name, locationId: action.locationId});
			}
		}
		break;
	case actionTypes.LOCATECITY:
		state = state.location.set('name', action.name);
		state = state.location.set('locationId', action.locationId);
	}
	return state;
};

export default city;
