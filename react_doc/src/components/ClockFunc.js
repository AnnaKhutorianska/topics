import React, { useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock
