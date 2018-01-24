import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const MoreActivitiesSquare = ({number}) => (
	<div className={style.moreActivitiesWrapper}>
		<span className={style.number}>{number}</span>
		<p className={style.more}> more activites </p>
		<span className={style.circle}></span>
	</div>
);

MoreActivitiesSquare.propTypes = {
	number: PropTypes.number
};

export default MoreActivitiesSquare;
