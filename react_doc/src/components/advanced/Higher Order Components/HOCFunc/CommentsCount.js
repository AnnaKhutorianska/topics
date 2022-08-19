import React, { Component } from "react";
import HOCcomponent from "./HOCcomponent";

function CommentsCount({countNumber, handlerClick}) {
  return (
    <div>
      total:
      {countNumber}
      <button onClick={handlerClick}>add comment</button>
    </div>
  );
}

export default HOCcomponent(CommentsCount, 10);
