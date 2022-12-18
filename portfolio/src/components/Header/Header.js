import Navbar from "../Navbar/Navbar.js";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="container-fluidHeader">
      <a className="headerTitle">Stephen Novelli Portfolio</a>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
