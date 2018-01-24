import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import  CreateQuestionList from '../../components/createQuestionList/index';

class HomePage extends React.Component {
	render() {
		return (
			<div className={style.homeMain}>	
				<CreateQuestionList />
			</div>
		);
	}
}

export default HomePage;
