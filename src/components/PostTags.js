import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <small className="post-tag-container">
        {tags && `Tags:`}
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
      </small>
    );
  }
}

export default PostTags;
