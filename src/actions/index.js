import { LOGIN, ADD_COMMENT } from "../constants";

export const loginAction = name => {
  let userId = createId();
  return {
    type: LOGIN,
    name,
    userId
  };
};

export const addComment = (postId, text) => {
  let commentId = createId();
  return {
    type: ADD_COMMENT,
    commentId,
    postId,
    text
  };
};

const createId = () => Math.floor(Math.random() * 1000 + 1);
