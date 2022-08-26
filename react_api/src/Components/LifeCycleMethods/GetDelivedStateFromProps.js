import React from "react"

export class ComponentGetDevived extends React.Component{
  constructor(props){
      super(props);
      this.state = {
      name: "name 1"
      };
  }
  static getDerivedStateFromProps(props, state) {
      if(props.name !== state.name){
          return{
              name: props.name
          };
      }
      return null; 
  }

  render(){
     return (
      <div>  name - {this.state.name }</div>
     )
  }
}