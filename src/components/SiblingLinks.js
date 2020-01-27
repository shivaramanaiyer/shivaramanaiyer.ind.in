import React from "react";
import { Link } from "gatsby";

class SiblingLinks extends React.Component {
  render() {
    const { config, isArchived } = this.props;

    return (
      <div className="sibling-links">
        <Link className="prev" to={config.prevslug}>
          {config.prevtitle}
        </Link>
        {isArchived && (
          <Link className="back-to-parent" to="/archives">
            Back to the Archives
          </Link>
        )}
        <Link className="next" to={config.nextslug}>
          {config.nexttitle}
        </Link>
      </div>
    );
  }
}

export default SiblingLinks;
