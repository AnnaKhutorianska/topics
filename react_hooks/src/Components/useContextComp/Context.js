import { createContext, useState } from 'react';

const MyContext  = createContext();

function ContextPeople({children}) {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'test 1'
    },
    {
      id: 2,
      name: 'test 2'
    },
    {
      id: 3,
      name: 'test 3'
    }
  ])

  function addNewUser(id, name) {
    console.log(3242);
    setUsers((prev) => [
      ...prev,
      {
        id,
        name
      }
    ])
  }

  return(
    <MyContext.Provider value={{users, addNewUser}}>
      {children}
    </MyContext.Provider>
  )
}

export {ContextPeople, MyContext}