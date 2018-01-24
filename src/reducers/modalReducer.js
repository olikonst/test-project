import * as types from '../actions/actionTypes';

export  default function modal( state = {isOpen: false}, action) {
	switch(action.type) {
		case types.SHOW_MODAL: 
			return Object.assign({}, state, {
				isOpen: true
			});
		case types.HIDE_MODAL: 
			return Object.assign({}, state, {
				isOpen: false
			});
		default:
		return state;
	}
}