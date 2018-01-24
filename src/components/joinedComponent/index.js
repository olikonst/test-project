import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import JoinItem from '../../components/joinItem/index';

const sen= require('../../assets/waweru.png');
const patricia=require('../../assets/patricia.png');
const joseph=require('../../assets/joseph.png');

const  ITEMS  = [
	{
		name: 'S.E.N. Waweru',
		image: sen
	},
	{
		name: 'Patricia',
		image: patricia
	},
	{
		name: 'Joseph Aluoch',
		image: joseph
	}
];

const JoinedComponent = () => (
	<div className={style.joinedComponentContainer}>
		{ITEMS.map((item,key) =>
			<JoinItem
				key={key}
				image={item.image}
				name={item.name}
			/>
		)}
	</div>
);

export default JoinedComponent;