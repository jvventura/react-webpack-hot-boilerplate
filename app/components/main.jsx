import React from 'react';

const Counter = props => {
	return <div onClick={props.counterAdd}>{props.value}</div>;
}

export default Counter;