import React from 'react'

Composition

function Wrapper ({color, children}) {
  const someStyle = {
    backgroundColor: color,
  };

  return (
    <div>
      Some wrapper
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
      <div style={someStyle}>
        {children}
      </div>
    </div>
  )
}

export default function CompositionvsInheritance() {
  return (
    <Wrapper color='rgb(147, 242, 158)'>
      <div>inner text</div>
    </Wrapper>
  )
}


//Specialization

function Card({title, description}) {

  return (
    <>
      <div>title: {title}</div>
      <div>description: {description}</div>
    </>
  )
}

export default function CartProduct() {
  return (
    <Card title='some title' description={'some description'} />
  )
}