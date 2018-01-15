import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = props => (
  <section className="jumbotron text-center">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12 homeFont headTitle">
          GramClone
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-12">
          <p className="homeText">
            Text Here
          </p>
          <br />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <Link to="/login" className="btn btn-block btn-lg jumboButton">
          Login
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <Link to="/register" className="btn btn-block btn-lg jumboButton">
          Register
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
      </div>
    </div>
  </section>
);


export default Jumbotron;
