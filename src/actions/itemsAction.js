import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';

export const createQuesitonList = item =>  ({
	type: types.CREATE_QUESTION_LIST, 
	payload: {
		item
	}
});

export const  loadItems = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/items', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(createQuesitonList(json)))
      .then(json => dispatch)
      .catch(err => {
        throw(err);
      });
  };
};
