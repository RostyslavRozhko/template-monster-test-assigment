import React from "react";
import PropTypes from "prop-types";

const TextNode = props => {
  return (
    <div style={props.styles}>
      <div style={{ fontWeight: "700" }}>{props.author}</div>
      <div>{props.text}</div>
    </div>
  );
};

TextNode.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TextNode;
