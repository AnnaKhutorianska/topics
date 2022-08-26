import React, {useState} from 'react'

function ReactMemo() {
  const [id, setId] = useState();

  return (
    <div>
      <button onClick={() => setId(1)}>click1</button>
      <button onClick={() => setId(2)}>click2</button>
      <button onClick={() => setId(3)}>click3</button>
      <IdBtn id={id} />
    </div>
  )
}

const IdBtn = React.memo(function IdBtn({id}) {
  console.log(242);
  return (
    <div>
      {id}
    </div>
  )
})

export default ReactMemo