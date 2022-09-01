import React, { useContext, useState } from 'react'
import { MyContext } from './Context'

function UserSecond() {
  const {addNewUser} = useContext(MyContext);
  const [id, setId ] = useState()
  const [name, setName ] = useState()

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); addNewUser(id, name) }}>
        <input type="number" placeholder='id' name='id' value={id} onChange={(e) => setId(e.target.value)}/>
        <input type="text" placeholder='name' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default UserSecond