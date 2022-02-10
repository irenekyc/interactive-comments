import React, { FunctionComponent } from "react";
import CommentInputCard from "../../components/comment-input-card";
import { v4 as uuidv4 } from "uuid";

const NewComment: FunctionComponent = () => {
  const newCommentId = uuidv4();
  return (
    <section className="comment-input-section">
      <CommentInputCard
        isNewComment
        commentId={newCommentId}
        confirmInput={() => {}}
      />
    </section>
  );
};
export default NewComment;
