import { CommentType, ReplyCommentType } from "../typings/Comment";

const addData = (
  loadComments: Array<CommentType>,
  newReply: ReplyCommentType,
  targetId: string
): Array<CommentType> => {
  const newComments = [...loadComments];
  const targetCommentIndex = loadComments.findIndex(
    (comment) => comment.id === targetId
  );
  const targetComment = {
    ...loadComments[targetCommentIndex],
    replies: [...loadComments[targetCommentIndex].replies, newReply],
  };
  newComments[targetCommentIndex] = targetComment;
  return newComments;
};

export default addData;
