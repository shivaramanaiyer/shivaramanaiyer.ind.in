import React from "react";
import { Link } from "gatsby";

export default class Navigation extends React.Component {
  render() {
    const { menuItems } = this.props;
    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="brand">
            <Link to="/">Shivaraman Aiyer</Link>
          </div>
          <div className="nav-links">
            {menuItems.map(menuItem => (
              <Link to={menuItem.to} key={menuItem.to}>
                {menuItem.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
