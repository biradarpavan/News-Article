// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">NewsApp</div>
        <div className="space-x-4">
          <Link to="/business" className="text-white hover:underline">Business</Link>
          <Link to="/sports" className="text-white hover:underline">Sports</Link>
          <Link to="/science" className="text-white hover:underline">Science</Link>
          <Link to="/saved" className="text-white hover:underline">Saved Articles</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
