import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const HappySquares = ({number, text, outer, inner}) => (
	<div className={`${style.happySquaresContainer} ${outer}`}>
		<div className={inner}>
			<span className={style.number}>{number}</span>
			<span className={style.text}>{text}</span>
		</div>
	</div>
);

HappySquares.propTypes = {
	number: PropTypes.number,
	text: PropTypes.string,
	outer: PropTypes.string,
	inner: PropTypes.string
};

export default HappySquares;
