import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import QuestionContainer from '../questionContainer/index';
import SquareWithImage from '../squareWithImage/index';
import MoreActivitesSquare from '../moreActivitesSquare/index';
import Statistics from '../statistics/index';
import Pagination from '../pagination/index';

const waweru = require('../../assets/waweru.png');
const patricia = require('../../assets/patricia.png');
const david = require('../../assets/david.png');
const joseph = require('../../assets/joseph.png');
const halima = require('../../assets/halima.png');
const eva = require('../../assets/eva.png');

class QuestionListItem extends Component {
	constructor(props){
		super(props);
		this.perPage = 3;
		this.state = {
			pagination: 0
		};

		this.paginatePage = this.paginatePage.bind(this);
	}

	paginatePage (currentPage) {
		let { pagination } = this.state;
		pagination ++;
		this.setState({pagination});
	}

	render() {
		const { items, placeholder, onClick } = this.props;
		return(
			<ul className={style.listWrapper}>
				{items.map((item,index )=> {
					if( index < this.state.pagination * this.perPage + this.perPage) {
					return (
						<li key={item.id} className={style.questionListWrapper}>
							<QuestionContainer
								image={item.image}
								name={item.name}
								question={item.activity.question}
								id={item.id}
								onClick={onClick}
								asked
								wrapper={style.questionContainer}
								noSingleQuestion
							>
							{item.name === 'Eva' &&
								<div className={style.squaresWrapper}>
									<MoreActivitesSquare 
										number={item.activity.numberOfAnswers}
									/>
									<SquareWithImage img={waweru} commented />
									<SquareWithImage img={patricia} commented hide={style.hide}/>
									<SquareWithImage img={david} commented hide={style.hideItems} />
									<SquareWithImage img={joseph} hide={style.hideItems} />
								</div>
							}

							{item.name === 'Andrew' &&
								<div className={style.squaresWrapper}>
									<MoreActivitesSquare 
										number={item.activity.numberOfAnswers}
									/>
									<SquareWithImage img={david} commented />
									<SquareWithImage img={joseph} commented hide={style.hideItems}/>
									<SquareWithImage img={halima} commented hide={style.hideItems}/>
									<SquareWithImage img={patricia} hide={style.hideItems}/>

								</div>
							}
								{item.name === 'Joseph' &&
								<div className={style.shorterWrapper}>
									<SquareWithImage img={halima} commented />
									<SquareWithImage img={patricia} commented hide={style.hideItems}/>
									<SquareWithImage img={eva} hide={style.hideItems}/>

								</div>
							}
							</QuestionContainer>
							<Statistics 
								discussion={item.activity.relatedDiscussion}
								peers={item.activity.peers}
								conversation={item.activity.conversation}
							/>
						</li>
					);
				}
				})}
				<Pagination onPageRequest={this.paginatePage} />
			</ul>
		);
	}
}

QuestionListItem.propTypes = {
	items: PropTypes.array,
	placeholder: PropTypes.string,
	onClick: PropTypes.func
};

export default QuestionListItem;
