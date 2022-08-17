import React from 'react'
import EnchancedComments from './CommentsCount'
import CommentsCount from './CommentsCount'
import EnchancedLikes from './LikesCount'
import LikesCount from './LikesCount'

function HOC() {
  return (
    <div>
      <EnchancedLikes />
      <EnchancedComments />
    </div>
  )
}

export default HOC