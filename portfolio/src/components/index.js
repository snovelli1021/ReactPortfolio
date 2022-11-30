import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarPages.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/AboutMe" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/Projects" activeStyle>
            Contact Me
          </NavLink>
          <NavLink to="/Contact" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/Resume" activeStyle>
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
