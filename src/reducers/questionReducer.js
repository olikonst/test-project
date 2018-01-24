import * as types from '../actions/actionTypes';

export default function questionReducer(state = [],action) {
	switch(action.type) {	
		case types.CREATE_QUESTION_LIST:
			return action.payload.item;
		default:
			return state;
	}
}
