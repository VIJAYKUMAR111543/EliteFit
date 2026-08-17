import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Elite<span>Fit</span>
      </div>

      {/* Desktop / Tablet Navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="#hero" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#programs" onClick={closeMenu}>
            Programs
          </a>
        </li>

        <li>
          <a href="#trainers" onClick={closeMenu}>
            Trainers
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        <li className="mobile-join">
          <a href="#contact" onClick={closeMenu}>
            Join Now
          </a>
        </li>

      </ul>

      {/* Desktop Join Button */}
      <button
        className="join-btn"
        onClick={() => {
          window.location.href = "#contact";
        }}
      >
        Join Now
      </button>

      {/* Mobile Menu Button */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
};

export default Navbar;