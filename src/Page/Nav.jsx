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
          <li>
            {" "}
            <NavLink to={`about/${'nikhil'}`} activeStyle={{ color: "red" }}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" activeStyle={{ color: "red" }}>
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
