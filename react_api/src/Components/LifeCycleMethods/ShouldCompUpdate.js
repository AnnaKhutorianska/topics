import React from "react"

export class CompNumber extends React.Component {
  constructor() {
     super();
     this.state = { number: 1 };
  }
  render() {
     return (
        <div>
           <button onClick={() => this.setState({ number: 1 })}>
              Change number1
           </button>
           <button onClick={() => this.setState({ number: 2 })}>
              Change number2
           </button>
           <MyComp value={this.state.number}/>
        </div>
     );
  }
}
class MyComp extends React.Component {
  shouldComponentUpdate(nextProps) {
     if (nextProps.value !== this.props.value) {
        return true;
     } else {
        return false;
     }
  }
  render() {
     console.log('called');
     return (
        <div>
           <p>hello</p>
        </div>
     );
  }
}