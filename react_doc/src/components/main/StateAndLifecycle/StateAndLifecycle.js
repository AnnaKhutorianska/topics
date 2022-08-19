import React, { Component, useEffect, useState } from "react";

// State
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Clock() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

// Lifecycle

// ComponnentDiDMount
// The componentDidMount() method runs after the component output has been rendered to the DOM

function SayDay() {
  useEffect(() => {
    console.log("Monday");
  }, []);

  return <div>some text</div>;
}

class SayDay extends Component {
  componentDidCatch() {
    console.log("Monday");
  }

  render() {
    return <div>some text</div>;
  }
}

// ComponnentWillUnmount
// React calls the componentWillUnmount() lifecycle method to stop side effects.

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 40,
      height: 20,
    };
  }

  componentDidMount() {
    document.addEventListener('resize', this.someFunc)
  }

  componentWillUnmount() {
    document.removeEventListener('resize', this.someFunc);
  }
}

function Box () {
  const [size, setSize] = useState({
    width: 40,
    height: 20,
  })

  useEffect(() => {
    document.addEventListener('resize', someFunc)
    return () => {
      document.removeEventListener('resize', someFunc)
    }
  }, [size])
}