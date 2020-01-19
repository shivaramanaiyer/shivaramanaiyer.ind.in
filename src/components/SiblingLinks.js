import React from "react";
import { Link } from "gatsby";

class SiblingLinks extends React.Component {
  render() {
    const { config } = this.props;

    return (
      <div>
        <Link to={config.prevslug}>{config.prevtitle}</Link>
        <Link to={config.nextslug}>{config.nexttitle}</Link>
      </div>
    );
  }
}

export default SiblingLinks;
