import React, { Component } from 'react'
import { ContextThemeConsumer } from './Context'

class Profile extends Component {
  static contextType = ContextThemeConsumer

  componentDidMount() {
    const user = this.context}
  }

  render() {
    return <div>{user}</div>
  }
}