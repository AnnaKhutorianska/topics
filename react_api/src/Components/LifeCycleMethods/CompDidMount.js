import React from "react"

export class CompDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'green' };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'red' });
    }, 2000);
  }

  render() {
    return (
      <div>
        <p
          style={{
            color: this.state.color,
          }}
        >
          some text
        </p>
      </div>
    );
  }
}
