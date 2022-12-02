import React, { useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="container-fluidHeader">
      <a className="navbarTitle" href="#" onClick={() => setCurrentPage("All")}>
        Stephen Novelli Portfolio
      </a>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
