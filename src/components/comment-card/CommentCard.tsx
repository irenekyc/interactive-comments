import React, { FunctionComponent } from "react";
import ReplyButton from "../reply-button";
import Score from "../score";
import UserRow from "../user-row";
import { CommentType, ReplyCommentType } from "../../typings/Comment";
import styles from "./CommentCard.module.scss";

interface CommentCardProps {
  isReply?: boolean;
  comment: CommentType | ReplyCommentType;
}
const CommentCard: FunctionComponent<CommentCardProps> = ({
  comment,
  isReply,
}: CommentCardProps) => {
  const ReplyTo = (): JSX.Element => {
    if (!isReply) return <></>;
    const { replyingTo = "" } = comment as ReplyCommentType;
    return <span>@{replyingTo}</span>;
  };
  return (
    <div className={styles.commentCard__card}>
      <Score commentId={comment.id} />
      <div className={styles.commentCard__main}>
        <div className="row">
          <UserRow user={comment.user} createdAt={comment.createdAt} />
          <ReplyButton commentId={comment.id} />
        </div>
        <div className={styles.commentCard__content}>
          <p>
            <ReplyTo />
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

{
  /* <div className="comment-card__replies__wrapper">
<div className="comment-card__replies__divider"></div>
<div className="comment-card__replies__main">

</div>
</div> */
}
