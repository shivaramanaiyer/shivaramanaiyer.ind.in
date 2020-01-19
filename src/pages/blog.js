import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import PostListing from "../components/PostListing";

class BlogPage extends Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Blog - ${config.siteTitle}`} />
          <SEO />
          <div className="container">
            <h1 className="page-title">Blog</h1>
            <PostListing postEdges={edges} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogPage;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___created, order: DESC }
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            created
            categories
            title
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
`;
