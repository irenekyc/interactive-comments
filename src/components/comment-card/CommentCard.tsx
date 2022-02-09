import React, { FunctionComponent } from "react";
import ReplyButton from "../reply-button";
import Score from "../score";
import UserRow from "../user-row";
import { CommentType, ReplyCommentType } from "../../typings/Comment";
import styles from "./CommentCard.module.scss";
import CurrentUserEditRow from "../current-user-edit-row";

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
  const isCurrentUser: boolean = comment.user.username === "juliusomo";
  return (
    <div className={styles.commentCard__card}>
      <Score commentId={comment.id} />
      <div className={styles.commentCard__main}>
        <div className={styles.commentCard__row}>
          <UserRow user={comment.user} createdAt={comment.createdAt} />
          {isCurrentUser ? (
            <CurrentUserEditRow />
          ) : (
            <ReplyButton commentId={comment.id} />
          )}
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
