import React, { useRef, useState, useEffect } from 'react'

function CurrentRef() {

  const [inputValue, setInputValue] = useState("");
  const prevInput = useRef("");

  useEffect(() => {
    prevInput.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>cur value: {inputValue}</div>
      <div>prev value: {prevInput.current}</div>
    </div>
  );
}

export default CurrentRef