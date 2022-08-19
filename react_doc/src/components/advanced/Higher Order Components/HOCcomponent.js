import React, { Component } from 'react'

const HOCcomponent = (Component, number) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      }
    }
  
    handlerClick = () => {
      this.setState({
        count: this.state.count + number
      })
    }

    render() {
      return(
          <Component countNumber={this.state.count} handlerClick={this.handlerClick} {...this.props}/>
      )
    }
  }
}

export default HOCcomponent