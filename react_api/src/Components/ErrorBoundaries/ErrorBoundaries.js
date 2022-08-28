import React, { Component } from 'react';

export default class ErrorBoundaries extends Component {
	state = {
		error: true,
	};

	static getDerivedStateFromError(error) {
		return {
			error: true,
		};
	}

	render() {
		return <div>{this.state.error ? <div>Some error</div> : <TextComponent />}</div>;
	}
}

class TextComponent extends Component {
	render() {
		return (
            <div>
                text text text
            </div>
    );
	}
}
