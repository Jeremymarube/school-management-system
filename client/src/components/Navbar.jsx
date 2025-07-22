import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    padding: "15px 40px",
    background: "linear-gradient(to left, #0f1e30 60%, #331a38 80%, #ff6600 100%)",
    color: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "0 4px 15px rgba(255, 102, 0, 0.3)",
    fontFamily: "'Poppins', sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  const linkStyle = {
    margin: "0 20px",
    color: "#f1f1f1",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    position: "relative",
    transition: "all 0.3s ease-in-out",
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = "#ffae42";
    e.target.style.textShadow = "0 0 8px #ffae42, 0 0 15px #ffae42";
    e.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = "#f1f1f1";
    e.target.style.textShadow = "none";
    e.target.style.transform = "scale(1)";
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Home
      </Link>
      <Link to="/students" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Students
      </Link>
      <Link to="/teachers" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Teachers
      </Link>
      <Link to="/classes" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Classes
      </Link>
      <Link to="/login" style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;