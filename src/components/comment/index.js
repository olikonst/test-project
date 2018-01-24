import React, {Component}from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import UpVotes from '../../components/upvotes/index';

const patricia = require('../../assets/patricia.png');
const david = require('../../assets/david.png');
const joseph = require('../../assets/joseph.png');

class Comment extends Component{
	constructor(props){
		super(props);
		this.state = {
			vote: 0
		};

		this.voteUp = this.voteUp.bind(this);
		this.voteDown = this.voteDown.bind(this);
	}

	voteUp() {
		this.setState({
			vote: this.state.vote + 1
		});
	}

	voteDown() {
		this.setState({
			vote: this.state.vote - 1
		});
	}

	render() {

		const {
			image,
			name, 
			date, 
			comment,
			answer
		} = this.props;

		return (
			<div className={answer ? style.answerWrapper : style.commentWrapper}>
				<div className={style.image}>
					{name === "Patricia" &&
						<img src={patricia} />
					}
					{name === "Dawid" &&
						<img src={david} />
					}
					{name === "Joseph" &&
						<img src={joseph} />
					}

				</div>
				<div className={style.comments}>
					<div className={style.commentHeader}> 
						<span className={style.name}>{name}</span> 
						<span className={style.commented}>COMMENTED IT</span>
						<span className={style.dot}> . </span>
						<span className={style.date}> {date} </span>
					</div>
					<div className={style.content}>
						{answer ? answer : comment}
					</div>
					{!answer ? 
						<div className={style.commentButton}>
							CONTINUE discussion
						</div>
						:
						<div>
						{comment !== 1  ? 
							<div className={style.answerButton}>
								COMMENT
							</div>
						: null
					}
				</div>
				}
				</div>
				<div className={style.upvotesWrapper}>
					<UpVotes 
						vote={this.state.vote}
						className={style.upvotes}
						voteUp={this.voteUp}
						voteDown={this.voteDown}
					/>
				</div>
			</div>
		);
	}		
}

Comment.propTypes = {
	image: PropTypes.object,
	name: PropTypes.string,
	date: PropTypes.string,
	comment: PropTypes.string,
	answer: PropTypes.string
};

export default Comment;
