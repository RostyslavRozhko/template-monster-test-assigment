import React from "react";
import LoginForm from "./LoginForm";
import PostsList from "./PostsList";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <LoginForm />
      <PostsList />
    </div>
  );
};

export default App;
