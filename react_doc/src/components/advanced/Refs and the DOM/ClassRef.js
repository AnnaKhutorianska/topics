import React from "react";

export default class ClassRef extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      name: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <>
        <h1>name: {this.state.name}</h1>
        <input
          ref={this.inputRef}
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <button
          onClick={() => this.inputRef.current.focus()}
        >
          Focus
        </button>
      </>
    );
  }
}