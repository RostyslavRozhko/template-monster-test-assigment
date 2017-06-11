import React from "react";
import { connect } from "react-redux";
import { getPosts } from "../selectors";
import Post from "../components/Post";
import { addComment } from "../actions";
import PropTypes from "prop-types";

const PostsList = props => {
  const { posts, isLogined, addComment } = props;
  return (
    <div>
      {posts.map(post => (
        <Post
          post={post}
          key={post.id}
          isLogined={isLogined}
          addCommentAction={addComment}
        />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  isLogined: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  posts: getPosts(state),
  isLogined: state.posts.isLogined
});

export default connect(mapStateToProps, { addComment })(PostsList);
