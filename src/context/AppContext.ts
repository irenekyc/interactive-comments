import { createContext } from "react";
import { CommentType, ReplyCommentType } from "../typings/Comment";
import { UserType } from "../typings/User";

type AppState = {
  currentUser: UserType;
  comments: Array<CommentType>;
};
const state: AppState = {
  currentUser: {
    username: "",
    image: {
      png: "",
      webp: "",
    },
  },
  comments: [],
};

type UpdateState = {
  addComment: (newComment: CommentType) => void;
  addReply: (newReply: ReplyCommentType, replyToId: string) => void;
  deleteComment: (commentId: string, isReply: boolean) => void;
  editComment: (
    commentId: string,
    isReply: boolean,
    newContent: string
  ) => void;
  editScore: (commentId: string, isReply: boolean, score: number) => void;
};

const updateState: UpdateState = {
  addComment: () => {},
  addReply: () => {},
  deleteComment: () => {},
  editComment: () => {},
  editScore: () => {},
};

export const initialState = {
  ...state,
  ...updateState,
};

const AppContext = createContext({
  ...state,
  ...updateState,
});

export default AppContext;
