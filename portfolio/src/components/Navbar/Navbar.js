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
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
