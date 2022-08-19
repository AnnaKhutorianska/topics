import React from "react";
import WithSubscription from "./WithSubscription";

function CommentsList() {
  return (
    <div>
      {this.state.comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
const CommentListWithSubscription = WithSubscription(CommentsList, (DataSource) => DataSource.getComments());

export default CommentListWithSubscription 
