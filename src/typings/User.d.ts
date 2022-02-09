export type UserType = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

type CommentCardOptionType = {
  isReply: boolean;
  author: string;
};

type CommentInputCardOptionType = {
  isNewComment?: boolean;
  replyTo?: number;
  replyToUser?: string;
};
