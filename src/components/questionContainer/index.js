import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import {Link} from 'react-router';

const QuestionContainer = ({
	wrapper, 
	imageClass, 
	nameClass, 
	askingClass, 
	questionClass, 
	onClick, 
	image, 
	name, 
	id, 
	question, 
	children,
	asked,
	noSingleQuestion
}) => {

	const eva = require('../../assets/eva.png');
	const andrew = require('../../assets/andrew.png');
	const joseph = require('../../assets/joseph.png');
	
	return (
	<div className={style.questionWrapper}>
		<div className={wrapper}>
			<span className={`${style.questionImage} ${imageClass}`} onClick={onClick}>
				{name === 'Eva' &&
					<Link to={'/'+`${id}`}><img src={eva} /></Link>
				}	
				{name === 'Andrew' &&
					<Link to={'/'+`${id}`}><img src={andrew} /></Link>
				}
				{name === 'Joseph' &&
					<Link to={'/'+`${id}`}><img src={joseph} /></Link>
				}
			</span>
			<span  
				className={`${style.name} ${nameClass}`} 
				onClick={onClick}
			>
				<Link to={'/'+`${id}`}>{name} </Link>		
			</span>
			<span className={`${style.asking} ${askingClass}`}> IS ASKING:</span>
			<p className={`${style.question} ${questionClass}`}>
				{noSingleQuestion ?
					<Link to={'/questions/'+`${id}`}>{question}</Link> : question
				}
			</p>	
		</div>
			{children}
		{asked &&
			<span className={style.asked}>
				ASKED
			</span>
		}
	</div>
);};

QuestionContainer.propTypes = {
	wrapper: PropTypes.string,
	imageClass: PropTypes.string,
	nameClass: PropTypes.string,
	questionClass: PropTypes.string,
	askingClass: PropTypes.string,
	onClick: PropTypes.func,
	image: PropTypes.object,
	name: PropTypes.string,
	id: PropTypes.number,
	question: PropTypes.string,
	children: PropTypes.object,
	asked: PropTypes.string,
	noSingleQuestion: PropTypes.bool
};

export default QuestionContainer;
