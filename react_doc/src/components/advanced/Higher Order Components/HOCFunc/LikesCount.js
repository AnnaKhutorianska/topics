import React, { Component } from 'react'
import HOCcomponent from './HOCcomponent'

function LikesCount({countNumber, handlerClick, name}) {
    return (
      <div>
        name: {name}
        num : {countNumber}
        <button onClick={handlerClick}>add like</button>
      </div>
    )

}

export default HOCcomponent(LikesCount, 5)