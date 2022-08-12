import React, { useState } from "react";

function PersonFullData({ name, lastName }) {
  return (
    <div>
      PersonFull:
      <div>
        {name} {lastName}
      </div>
    </div>
  );
}

function PersonInitials({ name, lastName }) {
  return (
    <div>
      PersonInitials
      <div>{name[0]}{lastName[0]}</div>
    </div>
  );
}

function LiftingStateUp() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="name"
          value={data.name}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={handleChange}
          name="lastName"
          value={data.lastName}
        />
      </form>
      <PersonFullData name={data.name} lastName={data.lastName} />
      <PersonInitials name={data.name} lastName={data.lastName} />
    </>
  );
}

export default LiftingStateUp;
