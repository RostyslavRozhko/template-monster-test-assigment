export const getPosts = state => {
  const allIds = state.posts.entities.allIds;
  let res = allIds.map(id => {
    let node = state.posts.entities.byId[id];
    node = {
      ...node,
      author: getAuthor(state, node.author),
      comments: getComments(state, node.comments)
    };
    return node;
  });
  return res;
};

export const getCurrentUserName = state => {
  const { currentUserId, users } = state.posts;
  if (!currentUserId) {
    return "";
  }
  return users.byId[currentUserId].name;
};

const getComments = (state, idsArr) => {
  let res = idsArr.map(id => {
    let node = state.posts.comments.byId[id];
    node = {
      ...node,
      commenter: getAuthor(state, node.commenter)
    };
    return node;
  });
  return res;
};

const getAuthor = (state, userId) => {
  return state.posts.users.byId[userId];
};
