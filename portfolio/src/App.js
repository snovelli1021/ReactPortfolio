import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/pages/";
import AboutMe from "./components/pages/AboutMe/AboutMe.js";
import Projects from "./components/pages/Projects/Projects.js";
import Contact from "./components/pages/Contact/Contact.js";
import Resume from "./components/pages/Resume/Resume.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
