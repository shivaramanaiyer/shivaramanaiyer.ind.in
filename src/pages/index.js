import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { Link, graphql } from "gatsby";
import SEO from "../components/SEO";
import PostListing from "../components/PostListing";

class IndexPage extends Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    return (
      <Layout>
        <div className="container">
          <Helmet title={`${config.siteTitle}`} />
          <SEO />
          <div className="articles">
            {edges.length ? (
              <PostListing postEdges={edges} />
            ) : (
              <div>
                No new articles found. Please visit{" "}
                <Link to="/archives">Archives</Link> to view articles that I have merged from my old blog.
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(
      limit: 15
      filter: {
        frontmatter: { archived: { ne: true }, layout: { eq: "post" } }
      }
      sort: { fields: fields___created, order: DESC }
    ) {
      edges {
        node {
          fields {
            created
            slug
          }
          excerpt
          frontmatter {
            title
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;
