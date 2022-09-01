import React, { useContext } from 'react'
import { MyContext } from './Context'

function UserFirst() {
  const {users} = useContext(MyContext);
 
  return (
    <div>
      users:
      {users.map(user => <div key={user.id}>{user.id} {user.name}</div>)}
    </div>
  )
}

export default UserFirst