import {combineReducers} from 'redux';
import items from './questionReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
	items,
	modal 
});

export default rootReducer;
