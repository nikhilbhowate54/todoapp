import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          <li>
            {" "}
            <NavLink to="/" activeStyle={{ color: "red" }}>
              home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
