import {SET_FORMATION} from './actions';

const initialState = {
	formation: '',
	image: '',
	strength: [],
	weakness: [],
	tactics: {},
	playerInstructions: {}
}

export default function reducer(state = initialState, action) {
	if(action.type === SET_FORMATION) {
		return Object.assign({}, state, {
			formation: action.formation,
			image: action.image,
			strength: action.strength,
			weakness: action.weakness,
			tactics: action.tactics,
			playerInstructions: action.playerInstructions
		});
	} else {
		return state;
	}
};