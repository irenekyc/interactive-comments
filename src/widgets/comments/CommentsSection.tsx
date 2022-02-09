import React, { FunctionComponent } from "react";
import data from "./data.json";
import { CommentType } from "../../typings/Comment";
import CommentCardWrapper from "../../components/comment-card-wrapper";

const CommentsSection: FunctionComponent = () => {
  const { comments } = data;
  return (
    <section className="comments-section">
      {comments
        ? comments.map((comment: CommentType) => (
            <CommentCardWrapper comment={comment} />
          ))
        : "loading"}
    </section>
  );
};

export default CommentsSection;
