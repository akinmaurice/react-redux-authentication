import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand py-0">GramClone </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/login" className="navLink">Login</Link> &nbsp;
        </li>
        <li className="nav-item">
          <Link to="/register" className="navLink">Register</Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default Header;
