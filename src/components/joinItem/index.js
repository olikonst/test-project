import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const JoinedItem = ({image,name}) => (
	<div className={style.joinedItemContainer}>
		<div className={style.square}>
			<img src={image} />
		</div>
		<p>{name}</p>
	</div>
);

JoinedItem.propTypes = {
	image: PropTypes.object,
	name: PropTypes.string
};

export default JoinedItem;