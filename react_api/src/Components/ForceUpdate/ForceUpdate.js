import React from 'react';

class ForceUpdate extends React.Component {
	handleClick = () => {
		this.forceUpdate();
	};

	render() {
		console.log('re-render');
		return (
			<div>
				<button onClick={this.handleClick}>click</button>
			</div>
		);
	}
}
export default ForceUpdate;
