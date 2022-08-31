import React from 'react'
import useFetchData from './useFetchData';

function UsersList() {
  const users = useFetchData('https://jsonplaceholder.typicode.com/users');

  return (
    <div>UsersList:
      {users.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
    </div>
  )
}

export default UsersList