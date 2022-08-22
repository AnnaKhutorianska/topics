import React, {useState, useRef} from "react";

export default function FuncRef() {
  const [name, setName] = useState('');

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

    return (
      <>
        <h1>name: {name}</h1>
        <input
          ref={inputRef}
          value={name}
          onChange={handleInputChange}
        />
        <button
          onClick={() => inputRef.current.focus()}
        >
          Focus
        </button>
      </>
    );
  
}