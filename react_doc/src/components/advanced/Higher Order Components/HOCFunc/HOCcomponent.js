import React, { useState } from "react";

const HOCcomponent = (Component, number) => {
  return function Foo(props) {
    const [count, setCount] = useState(0);

    // const handlerClick = () => setCount(count + number);

    return (
      <Component
        countNumber={count}
        handlerClick={() => setCount(count + number)}
        {...props}
      />
    );
  };
};

export default HOCcomponent;
