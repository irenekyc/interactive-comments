import React, { FunctionComponent, useContext, useState } from "react";

import styles from "./CommentInputCard.module.scss";
import AppContext from "../../context/AppContext";
import { CommentType, ReplyCommentType } from "../../typings/Comment";
import { v4 as uuidv4 } from "uuid";
interface CommentInputCardProps {
  isNewComment: boolean;
  replyTo?: string;
  commentId: string;
  confirmInput: () => void;
}

const CommentInputCard: FunctionComponent<CommentInputCardProps> = ({
  isNewComment,
  replyTo,
  commentId,
  confirmInput,
}: CommentInputCardProps) => {
  const { currentUser, addComment, addReply } = useContext(AppContext);
  const [commentInput, setCommentInput] = useState<string>("");

  const addThread = () => {
    // Close comment input card
    confirmInput();

    // if input is empty do not update
    if (commentInput === "") return;

    if (isNewComment) {
      const newComment: CommentType = {
        id: uuidv4(),
        content: commentInput,
        createdAt: "now",
        score: 0,
        user: currentUser,
        replies: [],
      };
      addComment(newComment);
    } else {
      const newReply: ReplyCommentType = {
        id: uuidv4(),
        content: commentInput,
        createdAt: "now",
        score: 0,
        user: currentUser,
        replyingTo: replyTo as string,
      };
      addReply(newReply, commentId);
    }
  };
  return (
    <div className={styles.commentInput__wrapper} id={commentId.toString()}>
      <img
        className={styles.commentInput__avatar}
        id="current-user-avatar"
        src={currentUser.image.png}
        alt={currentUser.username}
      />
      <div className={styles.commentInput__inputDiv}>
        <textarea
          className={styles.commentInput__input}
          placeholder="Add a comment"
          onChange={(e) => setCommentInput(e.target.value)}
          value={commentInput}
        >
          {isNewComment ? "" : replyTo ? `@${replyTo} ` : ""}
        </textarea>
      </div>
      <button
        className={styles.commentInput__button}
        data-comment-id={commentId}
        onClick={addThread}
      >
        Send
      </button>
    </div>
  );
};

export default CommentInputCard;
