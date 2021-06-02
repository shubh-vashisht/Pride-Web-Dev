import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/home">
        Pride
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/posts">
            Posts
          </NavLink>
          <NavLink className="nav-item nav-link" to="/comments">
            Comments
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
