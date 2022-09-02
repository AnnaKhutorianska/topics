import React, { useState, useMemo } from "react";

function squareNum(number) {
  console.log("X 2");
  return Math.pow(number, 2);
}

function UseMemoComp() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]); // not call if number is same

  //const squaredNum = squareNum(number); // call every render
  
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const counterHander = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="number"
        value={number}
        onChange={onChangeHandler}
      />

      <div>res x2 = {squaredNum}</div>
      <button onClick={counterHander}>add 1</button>
      <div>counter : {counter}</div>
    </div>
  );
}

export default UseMemoComp;
