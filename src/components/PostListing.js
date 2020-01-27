import React from "react";
import { Link } from "gatsby";
import moment from "../../node_modules/moment/moment";
import SiteConfig from "../../data/SiteConfig";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        created: postEdge.node.fields.created,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className="posts">
        {/* Your post list here. */
        postList.map(post => (
          <Link to={post.path} key={post.title}>
            <div className="post-item">
              <div className="post-name">{post.title}</div>
              <div className="post-details">
                <div className="post-excerpt">{post.excerpt}</div>
                <div className="post-time">
                  {moment(post.created, SiteConfig.dateFromFormat).fromNow()}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
