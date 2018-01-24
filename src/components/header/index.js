import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Search from '../../components/search/index';
import RadioButtons from '../../components/RadioButtons/index';
import {Link} from 'react-router';

class Header extends React.Component {
	render() {

		const {
			allQuestions, 
			header, 
			last, 
			value, 
			onClick, 
			onChange,
			customHeader
		} = this.props;

		return (
			<div className={`${style.headerWrapper} ${customHeader}`}>
				<Link to="/questions"><div className={style.arrowCircle}> &lt;</div></Link>
				<div className={style.wrapper}>
					<h1 className={style.header}>{header}</h1>
					<div className={style.circleButton}> 
						<span> + </span>
					</div>
					{allQuestions ? 
					<div className={style.items}>
						<RadioButtons />
						<div className={style.sortWrapper}>
							Sort by: <span>recent</span> or <span> hot </span>
						</div>
						<Search 
							value={value}
							onChange={onChange}
							onClick={onClick}
						/>		
					</div>
					:
					<div className={style.lastTimeWrapper}>
						Last time discussed <span>{last}</span> day ago
					</div>
					}
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	header: PropTypes.string,
	allQuestions: PropTypes.bool,
	last: PropTypes.number,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	customHeader: PropTypes.string
};

export default Header;
