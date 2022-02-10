import { CommentType } from "../typings/Comment";

const editData = (
  loadComments: Array<CommentType>,
  commentId: string,
  isReply: boolean,
  newContent: string
): Array<CommentType> => {
  if (isReply) {
    const newComments = loadComments.map((comment) => {
      return {
        ...comment,
        replies: comment.replies.map((reply) => {
          if (reply.id === commentId) {
            return { ...reply, content: newContent };
          }
          return reply;
        }),
      };
    });
    return newComments;
  } else {
    const newComments = loadComments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, content: newContent };
      }
      return comment;
    });
    return newComments;
  }
};

export default editData;
