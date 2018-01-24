import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class RadioButtons extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: 'my'
		};

		this.handlChange = this.handlChange.bind(this);
	}

	handlChange(e){
		this.setState({
			selected: e.target.value
		});
	}

	render(){
		return (
			<div className={style.radioButtonWrapper}>
			<label className={style.label}>
				<input
					type="radio" 
					value="my" 
					checked={this.state.selected ==="my"}
					onChange={this.handlChange}
					className={style.input}
				/>
					My shelf
			</label>
			<label className={style.label}>
				<input
					type="radio" 
					value="all" 
					checked={this.state.selected === "all"}
					onChange={this.handlChange}
					className={style.input}
				/>
				All Questions
			</label>
			</div>
		);
	}
}

export default RadioButtons;