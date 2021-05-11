import React from 'react';
import { Link } from 'gatsby';

class SiblingLinks extends React.Component {
  render() {
    const { config, isArchived } = this.props;

    return (
      <div className='sibling-links'>
        {config.prevslug && config.prevtitle ? (
          <Link className='prev' to={config.prevslug}>
            {config.prevtitle}
          </Link>
        ) : (
          <div></div>
        )}
        {isArchived && (
          <Link className='back-to-parent' to='/archives'>
            Back to the Archives
          </Link>
        )}
        {config.nextslug && config.nexttitle ? (
          <Link className='next' to={config.nextslug}>
            {config.nexttitle}
          </Link>
        ) : (<div></div>)}
      </div>
    );
  }
}

export default SiblingLinks;
