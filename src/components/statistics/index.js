import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Statistics = ({
	discussion, 
	peers, 
	conversation,
	upvotes }) => (
	<div className={style.statiticsWrapper}>
		<span>{discussion} related discussion </span>
		<span>{peers} peers involved </span>
		<span>{conversation} conversations </span>
		{upvotes &&<span>{upvotes} upvotes </span>}
	</div>
);

Statistics.propTypes = {
	discussion: PropTypes.number,
	peers: PropTypes.number,
	conversation: PropTypes.number,
	upvotes: PropTypes.number
};

export default Statistics;