import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
       <Link to="/students" style={{ margin: "0 10px", color: "#fff" }}>Home</Link>
      <Link to="/students" style={{ margin: "0 10px", color: "#fff" }}>Students</Link>
      <Link to="/teachers" style={{ margin: "0 10px", color: "#fff" }}>Teachers</Link>
      <Link to="/classes" style={{ margin: "0 10px", color: "#fff" }}>Classes</Link>
      <Link to="/login" style={{ margin: "0 10px", color: "#fff" }}>Login</Link>
    </nav>
  );
};

export default Navbar;