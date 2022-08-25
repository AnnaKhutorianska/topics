import React, { useRef } from "react";

function UncontrolledComponents() {
  const inputName = useRef(null);
  const inputLastName = useRef(null);
  const inputAge = useRef(null);

  function handleSubmit(e) {
    e.preventDefault()
    console.log({
      name: inputName.current.value,
      lastName: inputLastName.current.value,
      age: inputAge.current.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue='test name' ref={inputName} placeholder="input name"/>
      <input type="text" defaultValue='test last name' ref={inputLastName} placeholder="input last name"/>
      <input type="number" ref={inputAge} placeholder="input age" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledComponents;
