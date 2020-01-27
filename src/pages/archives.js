import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { graphql } from "gatsby";
import Layout from "../layout/index";
import PostListing from "../components/PostListing";

export default class ArchivePage extends React.Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;

    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Archives - ${config.siteTitle}`} />
          <SEO />
          <div className="container">
            <h1 className="page-title">Blog Archives</h1>
            <PostListing postEdges={edges} />
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___created, order: DESC }
      filter: {
        frontmatter: { layout: { eq: "post" }, archived: { eq: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            created
          }
          excerpt
          frontmatter {
            created
            categories
            title
            tags
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
