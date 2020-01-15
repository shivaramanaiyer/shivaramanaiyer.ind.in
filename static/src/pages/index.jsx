import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`${config.siteTitle}`} />
          just a test
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
