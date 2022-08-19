import React from 'react'

function listItem() {
  return (
    <>
      <li>item</li>
    </>
  )
}

// React.Fragment can contain key
function listItem({id}) {
  return (
    <React.Fragment key={id}>
      <li>item</li>
    </React.Fragment>
  )
}

function Fragments() {
  return (
    <ul>
      <listItem />
      <listItem />
      <listItem />
    </ul>
  )
}

export default Fragments