export type CommentType = {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: UserType;
  replies: Array<ReplyCommentType>;
};

type ReplyCommentType = {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: UserType;
  replyingTo: string;
};

export type CommentResponseType = {
  comments: Array<CommentType>;
  currentUser: UserType;
};
