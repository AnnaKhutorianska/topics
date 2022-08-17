import React, { Component } from 'react'

const HOCcomponent = (Component, data) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }
  
    handlerClick = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    render() {
      return(
       
          <Component countNumber={this.state.count} handlerClick={this.handlerClick}/>

      )
    }
  }
}

export default HOCcomponent