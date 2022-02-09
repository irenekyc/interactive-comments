import React, { FunctionComponent } from "react";
import { UserType } from "../../typings/User";
import styles from "./CommentInputCard.module.scss";

interface CommentInputCardProps {
  isNewComment: boolean;
  replyTo?: string;
  commentId: number;
}

const CommentInputCard: FunctionComponent<CommentInputCardProps> = ({
  isNewComment,
  replyTo,
  commentId,
}: CommentInputCardProps) => {
  const currentUser: UserType = {
    image: {
      png: "/images/avatars/image-juliusomo.png",
      webp: "/",
    },
    username: "",
  };
  return (
    <div className={styles.commentInput__wrapper} id={commentId.toString()}>
      <img
        className={styles.commentInput__avatar}
        id="current-user-avatar"
        src={currentUser.image.png}
        alt={currentUser.username}
      />
      <textarea
        className={styles.commentInput__input}
        placeholder="Add a comment"
      >
        {isNewComment ? "" : replyTo ? `@${replyTo}` : ""}
      </textarea>
      <button
        className={styles.commentInput__button}
        data-comment-id={commentId}
      >
        Send
      </button>
    </div>
  );
};

export default CommentInputCard;
