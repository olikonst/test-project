import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const eva = require('../../assets/eva.png');
const andrew = require('../../assets/andrew.png');
const joseph = require('../../assets/joseph.png');
const activity = require('../../assets/slice.png');

const ProfileHeader = ({image, name, memberTime, lastSeen, activityLevel}) => (
	<div className={style.profileHeaderContainer}>
		{name === 'Eva' &&
			<img src={eva} />
		}	
		{name === 'Andrew' &&
			<img src={andrew} />
		}
		{name === 'Joseph' &&
			<img src={joseph} />
		}
		<p className={style.name}>{name}</p>
		<div className={style.wrapper}>
			<p className={style.memberTime}> MEMBER FOR 
				<span className={style.item}> {memberTime} </span></p>
			<p className={style.lastSeen}>LAST SEEN 
				<span className={style.item}> {lastSeen} </span>
			</p>
			<p className={style.activity}> ACTIVITY LEVEL
				<img className={style.item} src={activity} /> 
			</p>
		</div>
	</div>
);

ProfileHeader.propTypes = {
	image: PropTypes.object,
	name: PropTypes.string,
	memberTime: PropTypes.string,
	lastSeen: PropTypes.string,
	activityLevel: PropTypes.number
};

export default ProfileHeader;