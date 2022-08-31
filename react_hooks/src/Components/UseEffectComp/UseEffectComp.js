import React, { useState, useEffect } from "react";

function UseEffectComp() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [id, setId] = useState("1");

  console.log(id);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  function handleClick(item) {
    setId(item.id);
  }

  return (
    <div>
      <div>
        All users:
        {users.map((item) => (
          <li key={item.id} onClick={() => handleClick(item)}>
            {item.name}
          </li>
        ))}
      </div>
      <div>Selected user:</div>
      <div>{user?.name}</div>
    </div>
  );
}

export default UseEffectComp;
