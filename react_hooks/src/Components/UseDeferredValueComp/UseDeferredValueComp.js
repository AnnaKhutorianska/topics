import React, { useMemo, useState, useDeferredValue } from 'react'

function List({input}) {
  const listSize = 2000
  const deferredInput = useDeferredValue(input)
  const list = useMemo(() => {
    const l = []
    for (let i = 0; i < listSize; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    } 
      return l
  }, [deferredInput])

  return list 
}

function UseDeferredValueComp() {
  const [input, setInput] = useState('')

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <div>
      <input type='text' value={input} onChange={handleChange} />
      <List input={input} />
    </div>
  )
}

export default UseDeferredValueComp