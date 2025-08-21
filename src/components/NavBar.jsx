import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Helper</Link>
      </div>

      <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/subjects/math" className="navbar-link math" onClick={() => setMenuOpen(false)}>Математика</Link>
        <Link to="/subjects/chemistry" className="navbar-link chem" onClick={() => setMenuOpen(false)}>Хімія</Link>
      </div>
    </nav>
  );
}