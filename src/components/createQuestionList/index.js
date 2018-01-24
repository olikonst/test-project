import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import QuestionListItem from '../../components/questionListItem/index';
import Modal from '../../components/modal/index.js';
import SingleProfile from '../../components/singleProfile/index';
import Header from '../../components/header/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemsActions from '../../actions/itemsAction';
import * as modalActions from '../../actions/modalAction';

class CreateQuestionList extends Component {
	constructor(props){
		super(props);
			this.state = {
				value: '',
				searchItems: props.items
			};

		this.onChange = this.onChange.bind(this);
		this.searchByNameorQuestion = this.searchByNameorQuestion.bind(this);
	}

	componentWillReceiveProps(nextState, nextProps) {
		this.nextState = {
			searchItems: nextProps.items
		};
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	searchByNameorQuestion() {
		const { value } = this.state;
		let result = [];
		this.props.items.forEach( item => {
			const { name, activity: { question } } = item;
			if(name.toLowerCase().indexOf(value) !== -1 ||
			question.toLowerCase().indexOf(value) !== -1){
				result.push(item);
			}
		});
	
		this.setState({
			searchItems: result
		});
	}

	render() {

		const { items, 
				isOpen,
				modals
			} = this.props;

		const { searchItems } = this.state;

		return (
			<div>
				<Header 
					header="Question"
					value={this.state.value}
					onChange={this.onChange}
					onClick={this.searchByNameorQuestion}
					allQuestions
				/>
				<div className={style.wrapper}>
				{searchItems.length === 0 ?
					<QuestionListItem 
						items={items}
						onClick={()=> modals.showModal()}
					/>
					:

					<QuestionListItem 
						items={searchItems}
						onClick={()=> modals.showModal()}
					/>
				}	
					<Modal 
						close={()=> modals.hideModal()} 
						isOpen={isOpen}  	
					>
						<SingleProfile 
							item={this.props.item}	
						/>
					</Modal>
				</div>
			</div>
		);
	}
}

CreateQuestionList.propTypes = {
	items: PropTypes.array,
	item: PropTypes.object,
	actions: PropTypes.func,
	modals: PropTypes.func,
	isOpen: PropTypes.bool
};

const getItemsById = (items, id) => {
  const item = items.filter( item => item.id == id);
  if(items) return item[0];
  return null;
};


const mapStateToProps = (state, ownProps) => {
	const { 
		items ,
		modal: {isOpen}
	} = state;

	let id = ownProps.params.id;
	let item;

	if(id && items.length > 0) {
		item = getItemsById(items,id);
	}
		
	return {
		items,
		item,
		isOpen
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(itemsActions, dispatch),
    modals: bindActionCreators(modalActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionList);
