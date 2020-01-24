import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import shivaraman from "../../content/images/shivaraman.jpg";
import { Link } from "gatsby";

class IndexPage extends Component {
  render() {
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
                I might from time to time write about things not related to the
                tech world but those will be posted to separate category,{" "}
                <Link to="/category/thoughts">thoughts</Link>.
              </p>
              <p>
                If you are still reading this, thank you for visiting my corner
                on the World of Web and hope you like what I have here. You can
                reach out to me via various channels listed on{" "}
                <Link to="/contact">contact</Link>.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
