import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          Visu<span className="highlight">AI</span>ize
        </h2>
      </div>
      <ul className="navbar-menu">
        {/* React Router Links for Dynamic Pages */}
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/text-to-image" className="nav-link">Text to Image</Link>
        </li>
        <li>
          <Link to="/image-to-text" className="nav-link">Image to Text</Link>
        </li>
        <li>
          <Link to="/text-to-speech" className="nav-link">Text to Speech</Link>
        </li>
        <li>
          <Link to="/speech-to-text" className="nav-link">Speech to Text</Link>
        </li>

        {/* Anchor Links for Static Sections */}
        <li>
          <a href="#about_us" className="nav-link">About</a>
        </li>
        <li>
          <a href="#faq_s" className="nav-link">FAQs</a>
        </li>
        <li>
          <a href="#contact_us" className="nav-link">Contact Us</a> {/* Ensure this matches the ID */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
