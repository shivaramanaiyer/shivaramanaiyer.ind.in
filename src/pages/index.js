import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import shivaraman from "../../content/images/shivaraman.jpg";
import { Link, graphql } from "gatsby";
import PostListing from "../components/PostListing";

class IndexPage extends Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;
    return (
      <Layout>
        <div className="container">
          <Helmet title={`${config.siteTitle}`} />
          <div className="hero">
            <div className="left">
              <img src={shivaraman} alt="Shivaraman Aiyer" />
            </div>
            <div className="right">
              <h1>Hello! I am Shivaraman</h1>
              <p>
                A Full-Stack Developer with a varied experience in Node.js,
                React.js, PHP and Android.
              </p>
              <p>
                This website is an atempt to keep track of new things that I
                learn to get back to when needed and write those in a way that
                can hopefully help others too.
              </p>
              <p>
                Thank you for visiting my corner on the World of Web and hope
                you like what I have here. You can reach out to me via various
                channels listed on <Link to="/contact">contact</Link>.
              </p>
            </div>
          </div>
          <div className="articles">
            <h2>Recent Articles</h2>
            {edges.length ? (
              <PostListing postEdges={edges} />
            ) : (
              <div>
                No recent articles found. Please visit{" "}
                <Link to="/archives">Archives</Link> to view archived articles
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
      limit: 5
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
