import React, { Component } from 'react'
import HOCcomponent from './HOCcomponent'

class LikesCount extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     likes: 0
  //   }
  // }

  // handlerClick = () => {
  //   this.setState({
  //     likes: this.state.likes + 1
  //   })
  // }

  render() {
    return (
      <div>
        {this.props.countNumber}
        <button onClick={this.props.handlerClick}>add like</button>
      </div>
    )
  }
}

const EnchancedLikes = HOCcomponent(LikesCount)

export default EnchancedLikes