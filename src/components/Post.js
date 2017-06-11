import React, { Component } from "react";
import TextNode from "./TextNode";
import PropTypes from "prop-types";

class Post extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    this.props.addCommentAction(this.props.post.id, this.state.comment);
    this.setState({
      comment: ""
    });
    e.preventDefault();
  };

  render() {
    const { post, isLogined } = this.props;
    return (
      <div style={styles.main}>
        <TextNode author={post.author.name} text={post.text} />
        <div>
          Comments:
          {post.comments.map(comment => (
            <TextNode
              author={comment.commenter.name}
              text={comment.text}
              key={comment.id}
              styles={styles.comment}
              header={"Comments:"}
            />
          ))}
        </div>
        {isLogined
          ? <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter your comment"
                onChange={this.handleChange}
                value={this.state.comment}
              />
              <input type="submit" value="Comment" />
            </form>
          : <div style={{ fontWeight: "bold" }}>Sign in to comment</div>}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  isLogined: PropTypes.bool.isRequired,
  addCommentAction: PropTypes.func.isRequired
};

const styles = {
  main: {
    padding: "10px 50px 5px 50px",
    marginBottom: "20px"
  },
  comment: {
    paddingLeft: "40px"
  }
};

export default Post;
