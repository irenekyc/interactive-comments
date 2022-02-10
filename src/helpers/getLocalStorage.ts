import { CommentType } from "../typings/Comment";
import {
  LOCALSTORAGE_NAME_COMMENTS,
  LOCALSTORAGE_NAME_USER,
  DEFAULT_USER,
} from "../constants";
import { UserType } from "../typings/User";

const getLocaleStorage = async (): Promise<{
  comments: Array<CommentType>;
  currentUser: UserType;
}> => {
  let response = {
    comments: [],
    currentUser: DEFAULT_USER,
  };
  if (typeof window !== undefined) {
    let data = window.localStorage.getItem(LOCALSTORAGE_NAME_COMMENTS);
    let userData = window.localStorage.getItem(LOCALSTORAGE_NAME_USER);

    if (data) {
      response = {
        ...response,
        comments: JSON.parse(data as string),
      };
    }
    if (userData) {
      response = {
        ...response,
        currentUser: JSON.parse(userData as string),
      };
    }
    if (!data || !userData) {
      const { comments, currentUser } = await (await fetch("data.json")).json();

      if (!data) {
        response = {
          ...response,
          comments,
        };
      }
      if (!userData) {
        response = {
          ...response,
          currentUser,
        };
      }
    }
  }
  return response;
};

export default getLocaleStorage;
