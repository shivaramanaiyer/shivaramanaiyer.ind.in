import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import UserLinks from "./UserLinks";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <UserLinks config={config} />
        </div>
      </footer>
    );
  }
}

export default Footer;
