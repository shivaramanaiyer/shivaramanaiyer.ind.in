import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo";
import Disqus from "../components/Disqus";
import PostTags from "../components/PostTags";
import SocialLinks from "../components/SocialLinks";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <Footer config={config} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
