import React, { memo, useCallback, useState } from 'react'

const Counter = memo((props) => {
  console.log('Counter render : ', props.children);
  return (
      <button onClick={props.handleClick}>
          {props.children}
      </button>
  );
})

function UseCallbackComp() {
  const [incrementValue, setIncrementValue] = useState(0);
  const [mulValue, setMulValue] = useState(2);

  const increment = useCallback(
    ()=>setIncrementValue(incrementValue+1), 
    [incrementValue]
  );

  const multiply = useCallback(
    ()=>setMulValue(mulValue*2),
    [mulValue]  
  );

  return(
  <div>
      <h2>increment value : {incrementValue}</h2>
      <Counter handleClick={increment} value={incrementValue} >increment</Counter>
      <h2>multiply value : {mulValue}</h2>
      <Counter handleClick={multiply} value={mulValue} >multiply</Counter>
  </div>
  );
}

export default UseCallbackComp