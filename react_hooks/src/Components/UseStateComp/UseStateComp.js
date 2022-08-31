import React, { useState } from "react";

function UseStateComp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const printValues = (e) => {
    e.preventDefault();
    console.log(name, password);
  };

  return (
    <form onSubmit={printValues}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="password"
      />
      <button>Submit</button>
    </form>
  );
}

export default UseStateComp;