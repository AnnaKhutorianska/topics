import React, { Component } from 'react'
import HOCcomponent from './HOCcomponent'

class CommentsCount extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     comments: 0
  //   }
  // }

  // handlerClick = () => {
  //   this.setState({
  //     comments: this.state.comments + 1
  //   })
  // }

  render() {
    return (
      <div>
        total: 
        {this.props.countNumber}
        <button onClick={this.props.handlerClick}>add comment</button>
      </div>
    )
  }
}

const EnchancedComments = HOCcomponent(CommentsCount)

export default EnchancedComments