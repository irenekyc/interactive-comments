import React, { FunctionComponent } from "react";
import data from "../comments/data.json";
import CommentInputCard from "../../components/comment-input-card";

const NewComment: FunctionComponent = () => {
  const newId = 5;
  return (
    <section className="comment-input-section">
      <CommentInputCard isNewComment commentId={newId} />
    </section>
  );
};
export default NewComment;
