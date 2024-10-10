import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for the Navbar

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Shopping App</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
