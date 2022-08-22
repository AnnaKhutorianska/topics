import React, {useState } from "react"
import ReactDOM from 'react-dom'

function Modal({ message, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
     <div className="modal">
      <span>{message}</span>
      <div>fsdfsfsafaf</div>
      <button onClick={onClose}>Close</button>
     </div>
    ,document.getElementById('modalRoot'));
}


export default function Component() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal 
       message="Hello World!" 
       isOpen={open} 
       onClose={() => setOpen(false)}
      />
    </div>
  )
}