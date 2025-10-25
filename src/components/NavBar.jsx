import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from '../context/AuthContext';
import '../styles/NavBar.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Helper</Link>
      </div>

      <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="navbar-link golovna" onClick={() => setMenuOpen(false)}>Головна</Link>
        <Link to="/subjects/math" className="navbar-link math" onClick={() => setMenuOpen(false)}>Математика</Link>
        <Link to="/subjects/chemistry" className="navbar-link chem" onClick={() => setMenuOpen(false)}>Хімія</Link>
        
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="navbar-link login" onClick={() => setMenuOpen(false)}>Вхід</Link>
            <Link to="/register" className="navbar-link register" onClick={() => setMenuOpen(false)}>Реєстрація</Link>
          </>
        ) : (
          <>
            <Link to="/subscriptions" className="navbar-link subs" onClick={() => setMenuOpen(false)}>Підписки</Link>
            <Link 
              to="/profile" 
              className="navbar-link profile" 
              onClick={() => setMenuOpen(false)}
            >
              {user ? user.email : 'Профіль'}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
