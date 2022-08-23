
import React, { useState } from 'react'

function RenderProps({render}) {
  const [data, setData] = useState([
    {
      id:1, name: 'test 1'
    },
    {
      id:2, name: 'test 2'
    },
    {
      id:3, name: 'test 3'
    },
    {
      id:4, name: 'test 5'
    },
  ]);

  return render(data)
}

export function FirstList () {
  return (
    <div>
      <div>first list</div>
      <RenderProps render={data => (
        data.map(item => <div>{item.id}-{item.name}</div>)
      )} />
    </div>
  )
}

export function SecondList () {
  return (
    <div>
      <div>second list</div>
      <ul>
        <RenderProps render={data => (
          data.map(item => <li>{item.name}</li>)
        )} />
      </ul>
    </div>
  )
}
