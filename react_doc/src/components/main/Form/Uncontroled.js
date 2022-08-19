import React, {useRef} from 'react'

function Uncontroled() {
  const inputName = useRef()

  function handleSubmit(e) {
    console.log(inputName.current.value);
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputName} placeholder='enter name' />
      <button>submit</button>
    </form>
  )
}

export default Uncontroled

// class Uncontroled extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputName = React.createRef();
//   }

//   handleSubmit = (e) => {
//     console.log(this.inputName.current.value);
//     e.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type='text' ref={this.inputName} placeholder='enter name' />
//         <button>submit</button>
//       </form>
//     )
//   }
// }

// export default Uncontroled