import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './screens/App';
import HomePage from './screens/home/index.js';
import CreateQuestionList from './components/createQuestionList/index';
import SingleQuestion from './components/singleQuestion/index';

export default (
	<Route path="/" component={App}>
		<IndexRoute component= {CreateQuestionList} />
		<Route path="/:id" component={CreateQuestionList} />
		<Route path="questions/:id" component={SingleQuestion} />
	</Route>
);
