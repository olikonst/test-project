import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const UpVotes = ({vote, className, voteUp, voteDown}) => (
	<div className={className}>
		<span className={style.number}>{vote} </span>
		<span className={style.upvote}> upvotes</span>
		<div className={style.arrows}>
			<div className={style.arrowUp} onClick={voteUp}></div>
			<div className={style.arrowDown} onClick={voteDown}></div>
		</div>
	</div>
);

UpVotes.propTypes = {
	vote: PropTypes.number,
	className: PropTypes.string,
	voteUp: PropTypes.func,
	voteDown: PropTypes.func
};

export default UpVotes;