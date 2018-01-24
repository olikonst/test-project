import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import QuestionContainer from '../../components/questionContainer/index';
import Comment from '../../components/comment/index';
import UpVotes from '../../components/upvotes/index';
import Header from '../../components/header/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemsActions from '../../actions/itemsAction';

class SingleQuestion extends Component { 
	constructor(props){
		super(props);
		this.state = {
			vote: 0
		};

		this.voteUp = this.voteUp.bind(this);
		this.voteDown = this.voteDown.bind(this);
	}

	voteUp() {
		this.setState({vote: this.state.vote + 1});
	}

	voteDown() {
		this.setState({vote: this.state.vote - 1});
	}


	render()  {
		const { item } = this.props;

		return (
			<div>
				<Header 
					header="Question" 
					last= {item.activity.discussedTime}
					customHeader={style.customHeader}
				/>
				<div className={style.singleQuesionWrapper}>
					<div className={style.wrapper}>
					<QuestionContainer  
						image={item.image}
						name={item.name}
						question={item.activity.question}
						wrapper={style.questionContainer}
						imageClass={style.image}
						nameClass={style.name}
						questionClass={style.question}
						askingClass={style.asking}
					>
						<div className={style.detailsWrapper}>
							<p className={style.details}>{item.activity.details}</p>
							<UpVotes 
								vote={this.state.vote}
								className={style.upvotes}
								voteUp={this.voteUp}
								voteDown={this.voteDown}
							/>
							<div className={style.unfollow}>unfollow</div>
						</div>
					</QuestionContainer>
					<div className={style.answerButton}>
						GIVE new answer
					</div>
					<div className={style.commentsWrapper}>
						<div className={style.peer}>
							<b>{item.additionalProfileInfo.peers}</b> peers already anwered {item.name}
						</div>
						{item.activity.answers.map( (item, key) => 
							<Comment 
								key={key}
								image={item.image}
								name={item.name}
								date={item.date}
								answer={item.answer}
								comment={item.comment}
							/>	
						)}
					</div>
					</div>
				</div>
			</div>
		);
	}
}

SingleQuestion.propTypes = {
	item: PropTypes.array
};

const getItemsById = (items, id) => {
  const item = items.filter( item => item.id == id);
  if(items) return item[0];
  return null;
};


const mapStateToProps = (state, ownProps) => {
	const { items } = state;
	let id = ownProps.params.id;
	let item;

	if(id && items.length > 0) {
		item = getItemsById(items,id);
	}
	return {
		item
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(itemsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);
