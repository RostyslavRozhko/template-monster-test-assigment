import { LOGIN, ADD_COMMENT } from "../constants";

const initialState = {
  isLogined: false,
  currentUserId: undefined,
  entities: {
    byId: {
      123: {
        id: 123,
        author: 1,
        text: "My awesome post",
        comments: [324]
      },
      523: {
        id: 523,
        author: 2,
        text: "My awesome second post",
        comments: []
      }
    },
    allIds: [123, 523]
  },
  users: {
    byId: {
      1: { id: 1, name: "Paul" },
      2: { id: 2, name: "Nicole" }
    },
    allIds: [1, 2]
  },
  comments: {
    byId: {
      324: { id: 324, commenter: 2, text: "My first comment" }
    },
    allIds: [324]
  }
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return loginUser(state, action);
    case ADD_COMMENT:
      return addComment(state, action);
    default:
      return state;
  }
}

const loginUser = (state, action) => {
  const usersById = state.users.byId;
  const usersAllIds = state.users.allIds;
  const { userId, name } = action;

  return {
    ...state,
    isLogined: true,
    currentUserId: userId,
    users: {
      byId: {
        ...usersById,
        [userId]: {
          id: userId,
          name: name
        }
      },
      allIds: [...usersAllIds, userId]
    }
  };
};

const addComment = (state, action) => {
  const commentsById = state.comments.byId;
  const commentsAllIds = state.comments.allIds;
  const { commentId, postId, text } = action;

  let newState = {
    ...state,
    entities: {
      ...state.entities,
      byId: {
        ...state.entities.byId,
        [postId]: {
          ...state.entities.byId[postId],
          comments: [...state.entities.byId[postId].comments, commentId]
        }
      }
    },
    comments: {
      byId: {
        ...commentsById,
        [commentId]: {
          id: commentId,
          text,
          commenter: state.currentUserId
        }
      },
      allIds: [...commentsAllIds, commentId]
    }
  };
  return newState;
};
