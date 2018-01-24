import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const andrew = require('../../assets/andrew.png');

const HottestDiscussion = ({
	image,
	name, 
	title, 
	discussion, 
	peers, 
	conversation,
	upvotes}) => (
	<div className={style.hottestDiscussionContainer}>
		<img src={andrew} />
		<span className={style.name}>Andrew</span> 
		FOUND THE GUARDIAN ARTICLE
		<p className={style.title}>Vegan diet to stop diabetes progress</p>
		<div className={style.items}>
			<span><b>{peers}</b> peers involved</span>
			<span><b>{discussion}</b> relates discussion </span>
			<span><b>{conversation}</b> conversations</span>
			<span><b>{upvotes}</b> upvotes </span>
		</div>
	</div>
);

HottestDiscussion.propTypes = {
	image: PropTypes.object,
	name: PropTypes.string,
	title: PropTypes.string,
	discussion: PropTypes.number,
	peers: PropTypes.number,
	conversation: PropTypes.number,
	upvotes: PropTypes.number
};

export default HottestDiscussion;

