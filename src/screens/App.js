import React, { Component } from 'react';
import PropTypes from 'prop-types';
import globals from '../styles/globals.scss';

class App extends Component {
	render() {
		return (
			<div className={globals.main}>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;