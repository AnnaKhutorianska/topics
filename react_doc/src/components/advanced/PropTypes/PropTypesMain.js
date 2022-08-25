import React from "react";
import PropTypesComponent from './PropTypes'

function PropTypesMain() {
  const address = {
    city: "kyiv",
    country: "ua"
  }

  function handleClick() {
    alert('some text')
  }

  return (
    <div>
      <PropTypesComponent
        id={3}
        name="test name"
        isSingle={false}
        age={44}
        address={address}
        work="FE"
        handleClick={handleClick}
      />
    </div>
  );
}

export default PropTypesMain;
