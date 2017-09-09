import {SET_FORMATION} from './actions';

const initialState = {
	formationObj: {}
}

export default function reducer(state = initialState, action) {
	if(action.type === SET_FORMATION) {
		return Object.assign({}, state, {
			formationObj: action.formationObj
		});
	} else {
		return state;
	}
};