import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class  Pagination extends  Component{
	render(){
		return (
			<div>
				<div className={style.loadMore}>
					<span onClick={this.props.onPageRequest}>load more question</span>
				</div>
			</div>
		);
	}
}

Pagination.propTypes = {
	onPageRequest: PropTypes.func
};

export default Pagination;
