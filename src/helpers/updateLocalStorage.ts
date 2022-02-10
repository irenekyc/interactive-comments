import { CommentType } from "../typings/Comment";
import {
  LOCALSTORAGE_NAME_COMMENTS,
  LOCALSTORAGE_NAME_USER,
} from "../constants";
import { UserType } from "../typings/User";

const updateLocalStorageComments = (newData: Array<CommentType>) => {
  if (typeof window === undefined) return;
  window.localStorage.setItem(
    LOCALSTORAGE_NAME_COMMENTS,
    JSON.stringify(newData)
  );
};

const updateLocalStorageUser = (user: UserType) => {
  if (typeof window === undefined) return;
  window.localStorage.setItem(LOCALSTORAGE_NAME_USER, JSON.stringify(user));
};

export { updateLocalStorageComments, updateLocalStorageUser };
