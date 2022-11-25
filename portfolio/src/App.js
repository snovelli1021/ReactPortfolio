import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar.js";
// import Header from "./components/Header/Header.js"
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header />*/}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
