import React, { FunctionComponent, useState } from "react";
import ReplyButton from "../reply-button";
import Score from "../score";
import UserRow from "../user-row";
import { CommentType, ReplyCommentType } from "../../typings/Comment";
import styles from "./CommentCard.module.scss";
import CurrentUserEditRow from "../current-user-edit-row";
import CommentInputCard from "../comment-input-card";
import classnames from "classnames";

interface CommentCardProps {
  isReply?: boolean;
  comment: CommentType | ReplyCommentType;
}
const CommentCard: FunctionComponent<CommentCardProps> = ({
  comment,
  isReply,
}: CommentCardProps) => {
  const replyTo = (): string => {
    if (!isReply) return "";
    const { replyingTo = "" } = comment as ReplyCommentType;
    return `@${replyingTo}`;
  };
  const isCurrentUser: boolean = comment.user.username === "juliusomo";
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const updateComment = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className={styles.commentCard__card}>
        <Score commentId={comment.id} />
        <div className={styles.commentCard__main}>
          <div className={styles.commentCard__row}>
            <UserRow user={comment.user} createdAt={comment.createdAt} />
            {isCurrentUser ? (
              <CurrentUserEditRow onClickEdit={() => setIsEditing(true)} />
            ) : (
              <ReplyButton
                commentId={comment.id}
                onClick={() => setIsReplying(true)}
              />
            )}
          </div>
          <div
            className={classnames(styles.commentCard__content, {
              [styles.isEditing]: isEditing,
            })}
            contentEditable={isEditing}
          >
            <p>{replyTo().concat(comment.content)}</p>
          </div>
          {isEditing && (
            <button
              className={styles.commentCard__confirmEditButton}
              onClick={updateComment}
            >
              Update
            </button>
          )}
        </div>
      </div>

      {isReplying && (
        <CommentInputCard
          isNewComment={false}
          replyTo={comment.user.username}
          commentId={comment.id}
        />
      )}
    </>
  );
};

export default CommentCard;
