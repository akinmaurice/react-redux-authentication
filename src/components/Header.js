import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStatetoProps(state) {
  return {
    user: state.user,
    authenticated: state.authenticated,
  };
}


class Header extends Component {
  componentDidMount() {
  }
  render() {
    let navLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/login" className="navLink">Login</Link> &nbsp;
        </li>
        <li className="nav-item">
          <Link to="/register" className="navLink">Register</Link>
        </li>
      </ul>
    );
    if (this.props.authenticated) {
      const { email } = this.props.user;
      navLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/create" className="navLink">Create Todo</Link> &nbsp;
          </li>
          <li className="nav-item">
            <Link to="/profile" className="navLink">
              {email}
            </Link> &nbsp;
          </li>
          <li className="nav-item">
            <Link to="/logout" className="navLink">Logout</Link> &nbsp;
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand py-0">ReactAuth </Link>
          {navLinks}
        </div>
      </nav>
    );
  }
}
export default connect(mapStatetoProps)(Header);
