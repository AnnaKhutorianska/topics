import React from 'react'

function ListAndKeys() {
  const people = [
    {
      id: 1,
      name: 'Peter'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Kate'
    }
  ]

  return (
    <div>
      {people.map(person => (
        <div key={person.id}>id - {person.id}, name - {person.name}</div>
      ))}
    </div>
  )
}

export default ListAndKeys