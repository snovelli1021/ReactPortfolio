import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleState, setToggleState] = useState("collapse");
  const handleClick = () => {
    if (toggleState === "collapse") {
      setToggleState("show");
    } else {
      setToggleState("collapse");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light" id="navbarCustom">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Stephen Novelli Portfolio
        </a>
        <button
          onClick={handleClick}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${toggleState} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Fullstack Projects
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    GIS Projects
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
