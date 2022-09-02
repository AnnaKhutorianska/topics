import React, { useRef, useImperativeHandle, forwardRef } from "react"

function sendMsg() {
  console.log("hello")
}

export default function ImperativeParent() {
  const ref = useRef(null)
  return (
    <div>
      <ImperativeChild ref={ref} />
      <button onClick={() => ref.current.focus()}>focus</button>
    </div>
  )
}

export function ImperativeChildComponent(props, ref) {
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      sendMsg()
      inputRef.current.focus()
    },
  }))

  return <input {...props} ref={inputRef} />
}

const ImperativeChild = forwardRef(ImperativeChildComponent)
