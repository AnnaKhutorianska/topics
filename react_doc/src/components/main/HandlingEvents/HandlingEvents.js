import React, { useState } from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function Toogle() {
  const [isToggleOn, setIsToggleOn] = useState(true)
  
  const  handleClick = () =>  setIsToggleOn(prevState => !prevState)

  return(
    <button onClick={handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
    </button>
  )
}

/////////////////////////// 

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(text) {
    console.log(text)
  }

  render() {
    return (
      <div onFocus={() => this.handleFocus('fullname')}>hover here</div>
    )
  }
}

class Text2 extends React.Component {

  handleFocus = (name) => {
    console.log(name)
  }

  render() {
    return (
      <div onFocus={() => this.handleFocus('fullname')}>hover here</div>
    )
  }
}

//////////////

function LinkClick() {
  function handleClick(e) {
    e.preventDefault();
    console.log('click');
  }

  return (
    <a href="#" onClick={handleClick}>click here</a>
  )
}

class LinkClick2 extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log('click');
  }

  render() {
    return (
      <a href="#" onClick={(e) => this.handleClick(e)}>click here</a>
    )
  }
}