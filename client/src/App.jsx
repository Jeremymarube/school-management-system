import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        {/* Add placeholder routes for now */}
        <Route path="/students" element={<div>Home Page</div>} />
        <Route path="/students" element={<div>Students Page</div>} />
        <Route path="/teachers" element={<div>Teachers Page</div>} />
        <Route path="/classes" element={<div>Classes Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;