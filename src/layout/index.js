import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/main.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap" rel="stylesheet" />
        </Helmet>
        <Navigation menuItems={config.menuItems} />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    );
  }
}
