import { Map } from 'immutable';
import * as actionTypes from '../actionTypes/city';
const initState = Map({
	name: null,
	locationId: null
});

const city = (state = initState, action) => {
	switch(action.type) {
	case actionTypes.SELECTCITY:
		state.set('name', action.name);
		state.set('locationId', action.locationId);
		break;
	}
	return state;
};

export default city;
