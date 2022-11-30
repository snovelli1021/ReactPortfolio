import React from "react";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="container-fluid">
      <a className="navbarTitle" href="#" onClick={() => setCurrentPage("All")}>
        Stephen Novelli Portfolio
      </a>
    </div>
  );
}
