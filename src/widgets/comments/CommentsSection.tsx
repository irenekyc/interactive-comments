import React, { FunctionComponent, useContext } from "react";
import { CommentType } from "../../typings/Comment";
import CommentCardWrapper from "../../components/comment-card-wrapper";
import AppContext from "../../context/AppContext";

const CommentsSection: FunctionComponent = () => {
  const { comments } = useContext(AppContext);
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
