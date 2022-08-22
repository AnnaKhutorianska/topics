import React from 'react'

function ReactWithoutJSX({name}) {
  return (
    // <div>Name: {name}</div>
    React.createElement('div', null, `Hello ${name}`)
  )
}

export default ReactWithoutJSX