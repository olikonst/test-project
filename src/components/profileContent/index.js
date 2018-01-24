import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import HappySquare from '../../components/happySquares/index';
import JoinedComponent from '../../components/joinedComponent/index';

const ProfileContent = ({
	numberOfPeers,
	numberOfDiscussion,
	numberOfFindings,
	numberOfQuestions,
	questions
}) => (
	<div className={style.profileContentContainer}>
		<div className={style.items}>
			<div className={style.button}>&lt;</div>
			<h2>How it all started</h2>
			<div className={style.button}>&gt;</div>
		</div>
		<p>THAT'S WHERE HAVE BEEN THESE 5 MONTHS AGO</p>
		<div className={style.squaresWrapper}>
			<HappySquare 
				number={numberOfPeers}
				text="peers"
				outer={style.outer}
				inner={style.inner}
			/>
			<HappySquare 
				number={numberOfDiscussion}
				text="discussions"
				outer={style.leftOuter}
				inner={style.leftInner}
			/>
			<HappySquare 
				number={numberOfFindings}
				text="findings"
				outer={style.outer}
				inner={style.inner}
			/>
			<HappySquare 
				number={numberOfQuestions}
				text="questions"
				outer={style.rightOuter}
				inner={style.rightInner}
			/>
		</div>
		<p> WHO JOINED THE PLATFORM THAT SAME PERIOD</p>
		<JoinedComponent  />
		<p>THE HOTTEST DISCUSSION THESE DAYS</p>
	</div>
);

ProfileContent.propTypes = {
	numberOfPeers: PropTypes.number,
	numberOfDiscussion: PropTypes.number,
	numberOfFindings: PropTypes.number,
	numberOfQuestions: PropTypes.number,
	questions:PropTypes.string
};

export default ProfileContent;