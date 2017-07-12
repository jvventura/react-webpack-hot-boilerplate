import { COUNTER_ADD } from './actions.js';

const initialState = {
	value: 0
};

export function counter(state = initialState, action) {
	let { value } = state;
	switch (action.type) {
		case COUNTER_ADD:
			return {
				...state,
				value: ++value
			}
		default:
			return state;
	}
};