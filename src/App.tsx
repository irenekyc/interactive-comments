import React, { useEffect } from "react";
import "./App.css";
import CommentsSection from "./widgets/comments";
import NewComment from "./widgets/new-comment";

function App() {
  return (
    <div className="App">
      <CommentsSection />
      <NewComment />
    </div>
  );
}

export default App;
