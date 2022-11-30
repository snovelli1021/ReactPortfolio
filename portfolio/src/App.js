import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/pages/";
import AboutMe from "./components/pages/AboutMe/AboutMe.js";
import Projects from "./components/pages/Projects/Projects.js";
import Contact from "./components/pages/Contact/Contact.js";
import Resume from "./components/pages/Resume/Resume.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [currentPage, setCurrentPage] = useState("All");

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {(currentPage === "Home" || currentPage === "All") && <Home />}
      {(currentPage === "AboutMe" || currentPage === "All") && <AboutMe />}
      {(currentPage === "Projects" || currentPage === "All") && <Projects />}
      {(currentPage === "Resume" || currentPage === "All") && <Resume />}
      {(currentPage === "Contact" || currentPage === "All") && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
