import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAbout = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const aboutSection = document.getElementById('about-us');
      aboutSection?.scrollIntoView({behavior: 'smooth'});
    } else {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about-us');
        aboutSection?.scrollIntoView({behavior: 'smooth'});
      }, 100);
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link"><img src={`${process.env.PUBLIC_URL}/images/petheavenlogotrans.png`} alt="Pet Heaven Logo" className="navbar-logo" /></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about-us" onClick={handleAbout}>About Us</a></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/adopt">Adopt</Link></li>
        <li><Link to="/release">Release</Link></li>
        {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
        {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
