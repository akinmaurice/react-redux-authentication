import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          <h3>
            <Link to="/" className="headTitle">
             GramClone
            </Link>
          </h3>
          <h6>
            Sign In
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form className="form-signin">
            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address" className="form-control" />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder="Password" className="form-control" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
export default Login;
