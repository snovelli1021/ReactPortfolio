// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import AboutMe from "./components/pages/AboutMe/AboutMe.js";
import Projects from "./components/pages/Projects/Projects.js";
import Contact from "./components/pages/Contact/Contact.js";
import Resume from "./components/pages/Resume/Resume.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "AboutMe" && <AboutMe />}
      {currentPage === "Projects" && <Projects />}
      {currentPage === "Resume" && <Resume />}
      {currentPage === "Contact" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
