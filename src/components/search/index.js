import React,{Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import TextInput from '../../components/textinput/index';
import Button from '../../components/buttons/index';

const Search = ({value, onChange, onClick}) => (
	<div className={style.searchWrapper}>
		<TextInput 
			type="text"
			name="search"
			value={value}
			placeholder="Search questions"
			inputWrapper={style.inputWrapper}
			callback={onChange}
		/>
		<Button 
			value="Search"
			className={style.searchButton}
			onClick={onClick}
		/>
	</div>
);
	
Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func
};

export default Search;
