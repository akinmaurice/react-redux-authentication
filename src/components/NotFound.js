import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
  <div className="container text-center">
    <div className="row">
      <div className="col-lg-12">
        <h3 className="headTitle">
             404
          <Link to="/">
             Go back Home
          </Link>
        </h3>
      </div>
    </div>
  </div>
);
export default NotFound;
