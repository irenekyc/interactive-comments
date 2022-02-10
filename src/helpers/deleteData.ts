import { CommentType } from "../typings/Comment";

const deleteData = (
  loadComments: Array<CommentType>,
  commentId: string,
  isReply: boolean
): Array<CommentType> => {
  if (isReply) {
    const newComments = loadComments.map((comment) => {
      return {
        ...comment,
        replies: comment.replies.filter((reply) => reply.id !== commentId),
      };
    });
    return newComments;
  } else {
    const newComments = loadComments.filter(
      (comment) => comment.id !== commentId
    );
    return newComments;
  }
};

export default deleteData;
