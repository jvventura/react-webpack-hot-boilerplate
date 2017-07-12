import React from 'react';
import { connect } from 'react-redux';
import { counterAdd } from 'redux/actions.js';
import Component from './main.jsx';

const mapStateToProps = state => {
	return {
		value: state.counter.value
	}
}

const mapDispatchToProps = dispatch => {
	return {
		counterAdd: () => {
			dispatch(counterAdd());
		},
		// Async calls.
	}
}

let Container = props => {
	return <Component {...props} />;
};

const Counter = connect(
	mapStateToProps,
	mapDispatchToProps
)(Container);

export default Counter;