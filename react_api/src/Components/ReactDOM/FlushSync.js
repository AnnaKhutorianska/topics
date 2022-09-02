import React, {useState} from 'react'
import { flushSync } from 'react-dom';

function CompState() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount(c => c + 1); // not rerender
    setFlag(f => !f); // not rerender
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div style={{ color: flag ? "blue" : "black" }}>{count}</div>
    </div>
  );
}



export default function FlushSyncComp() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    flushSync(() => {
      setCount(c => c + 1);
    });
    // rerender
    flushSync(() => {
      setFlag(f => !f);
    });
    // rerender
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div style={{ color: flag ? "blue" : "black" }}>{count}</div>
    </div>
  );
}