import React, { useState, useEffect } from "react";
import "./App.css";
import CommentsSection from "./widgets/comments";
import NewComment from "./widgets/new-comment";
import AppContext, { initialState } from "./context/AppContext";
import { CommentType, ReplyCommentType } from "./typings/Comment";
import { UserType } from "./typings/User";

import getLocaleStorage from "./helpers/getLocalStorage";
import addData from "./helpers/addData";
import deleteData from "./helpers/deleteData";
import editData from "./helpers/editData";
import { DEFAULT_USER } from "./constants";
import { updateLocalStorageComments } from "./helpers/updateLocalStorage";

const App = () => {
  const [loadComments, setLoadComments] = useState<Array<CommentType>>([]);
  const [loadedUser, setCurrentLoadedUser] = useState<UserType>(DEFAULT_USER);

  const updateMainData = (data: Array<CommentType>): void => {
    setLoadComments(data);
  };

  useEffect(() => {
    if (loadComments.length > 0) {
      updateLocalStorageComments(loadComments);
    }
  }, [loadComments]);

  const addComment = (newComment: CommentType) =>
    setLoadComments([...loadComments, newComment]);

  const addReply = (newReply: ReplyCommentType, targetId: string) => {
    const newComments = addData(loadComments, newReply, targetId);
    updateMainData(newComments);
  };

  const deleteComment = (commentId: string, isReply: boolean) => {
    const newComments = deleteData(loadComments, commentId, isReply);
    updateMainData(newComments);
  };

  const editComment = (
    commentId: string,
    isReply: boolean,
    newContent: string
  ) => {
    const newComments = editData(loadComments, commentId, isReply, newContent);
    updateMainData(newComments);
  };

  useEffect(() => {
    const loadData = async () => {
      const { comments, currentUser } = await getLocaleStorage();
      setLoadComments(comments);
      setCurrentLoadedUser(currentUser);
    };
    loadData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...initialState,
        currentUser: loadedUser,
        comments: loadComments,
        addComment,
        addReply,
        deleteComment,
        editComment,
      }}
    >
      <div className="App">
        <CommentsSection />
        <NewComment />
      </div>
    </AppContext.Provider>
  );
};

export default App;
