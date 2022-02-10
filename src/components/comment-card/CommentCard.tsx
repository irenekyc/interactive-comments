import React, { FunctionComponent, useState, useRef, useContext } from "react";
import ReplyButton from "../reply-button";
import Score from "../score";
import UserRow from "../user-row";
import { CommentType, ReplyCommentType } from "../../typings/Comment";
import styles from "./CommentCard.module.scss";
import CurrentUserEditRow from "../current-user-edit-row";
import CommentInputCard from "../comment-input-card";
import classnames from "classnames";
import AppContext from "../../context/AppContext";
import getTimeDistance from "../../helpers/getTimeDistance";

interface CommentCardProps {
  isReply?: boolean;
  comment: CommentType | ReplyCommentType;
  mainThredId: string;
}
const CommentCard: FunctionComponent<CommentCardProps> = ({
  comment,
  isReply = false,
  mainThredId,
}: CommentCardProps) => {
  const replyTo = (): string => {
    if (!isReply) return "";
    const { replyingTo = "" } = comment as ReplyCommentType;
    return `@${replyingTo} `;
  };
  const isCurrentUser: boolean = comment.user.username === "juliusomo";
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const editCommentDivRef = useRef<HTMLSpanElement | null>(null);
  const { editComment } = useContext(AppContext);

  const updateComment = () => {
    setIsEditing(false);
    if (editCommentDivRef && editCommentDivRef.current) {
      const newContent = editCommentDivRef.current.textContent as string;
      editComment(comment.id, isReply, newContent);
    }
  };

  return (
    <>
      <div className={styles.commentCard__card}>
        <Score score={comment.score} className={styles.hideInSM} />
        <div className={styles.commentCard__main}>
          <div className={styles.commentCard__row}>
            <UserRow
              user={comment.user}
              createdAt={getTimeDistance(comment.createdAt)}
            />
            {isCurrentUser ? (
              <CurrentUserEditRow
                className={styles.hideInSM}
                onClickEdit={() => setIsEditing(true)}
                commentId={comment.id}
                isReply={isReply}
              />
            ) : (
              <ReplyButton
                className={styles.hideInSM}
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
            <p>
              <span className={styles.commentCard__replyToSpan}>
                {replyTo()}
              </span>
              <span ref={editCommentDivRef}>{comment.content}</span>
            </p>
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
        <div
          className={classnames(styles.hideInMD, styles.commentCard__row__sm)}
        >
          <Score score={comment.score} />
          {isCurrentUser ? (
            <CurrentUserEditRow
              onClickEdit={() => setIsEditing(true)}
              commentId={comment.id}
              isReply={isReply}
            />
          ) : (
            <ReplyButton
              commentId={comment.id}
              onClick={() => setIsReplying(true)}
            />
          )}
        </div>
      </div>

      {isReplying && (
        <CommentInputCard
          isNewComment={false}
          replyTo={comment.user.username}
          commentId={mainThredId}
          confirmInput={() => setIsReplying(false)}
        />
      )}
    </>
  );
};

CommentCard.defaultProps = {
  isReply: false,
};

export default CommentCard;
