import React, { Component } from "react";

class Greetings extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

function Greetings({ name, text }) {
  return (
    <div>
      <div>{name}</div>
      <div>{text}</div>
    </div>
  );
}

//Extracting Components

function Header() {
  return (
    <div className="header">
      <div className="logo">some logo text</div>
      <div className="menu">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <div className="buttom">
        <button>cart</button>
      </div>
    </div>
  );
}

//separation

function Logo({ text }) {
  return <div className="logo">{text}</div>;
}

function Menu({ items }) {
  return (
    <div className="menu">
      <ul>
        {items.map((item) => (
          <li>item.name</li>
        ))}
      </ul>
    </div>
  );
}

function Button({ text }) {
  return (
    <div className="buttom">
      <button>cart</button>
    </div>
  );
}

function Header() {
  <div className="header">
    <Logo text={text} />
    <Menu items={items} />
    <Button />
  </div>;
}
