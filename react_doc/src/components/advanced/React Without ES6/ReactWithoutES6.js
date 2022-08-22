import React from "react";

var createReactClass = require("create-react-class");


var mixinDefaultProps = {
  getDefaultProps: function(){
      return {name: 'test user'}
  }
}

var ReactWithoutES6 = createReactClass({
  // getDefaultProps: function () {
  //   return {
  //     name: "test user",
  //   };
  // },


  mixins: [mixinDefaultProps],

  getInitialState: function () {
    return { count: this.props.count };
  },

  handleClick: function () {
    this.setState({ count: this.state.count + 1 });
  },

  render: function () {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleClick}>add 1</button>
      </div>
    );
  },
});

export default ReactWithoutES6;
