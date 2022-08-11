import React, { useState } from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}


function Loading() {
  const [isLoading, setIsLoading] = useState[true];

  return isLoading ? <div>Loading</div> : <div>Loaded</div>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn((prev) => !prev);

  const handleLogoutClick = () => setIsLoggedIn((prev) => prev);

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}

function Cart({ items }) {
  return (
    <div>
      <div>cart</div>
      {items.length && <ul>{items.map(item => <li>{item}</li>)}</ul>}
    </div>
  )
}  


//Preventing Component from Rendering
function WarningBanner({ warn }) {
  if (!warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

function Page () {
  return (
    <div>
      <div>page</div>
      <WarningBanner warn={true}/>
    </div>
  )
}