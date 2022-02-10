import React, { FunctionComponent } from "react";
import CommentCard from "../comment-card";
import { CommentType, ReplyCommentType } from "../../typings/Comment";
import styles from "./CommentCardWrapper.module.scss";

interface CommentCardWrapperProps {
  comment: CommentType;
}

const CommentCardWrapper: FunctionComponent<CommentCardWrapperProps> = ({
  comment,
}: CommentCardWrapperProps) => {
  return (
    <div>
      <CommentCard comment={comment} mainThredId={comment.id} />
      {comment.replies.length > 0 && (
        <div className={styles.replies__wrapper}>
          <div className={styles.replies__divider}></div>
          <div className={styles.replies__main}>
            {comment.replies.map((reply: ReplyCommentType) => (
              <CommentCard
                isReply
                comment={reply}
                key={reply.id}
                mainThredId={comment.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentCardWrapper;
