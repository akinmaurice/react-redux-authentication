import React from 'react';
import Header from './Header';
import Footer from './utils/Footer';

const navHead = (
  <div className="row">
    <div className="col-lg-12">
      <h3 className="headTitle">
       Edit Account
      </h3>
    </div>
  </div>
);

const Profile = () => (
  <div>
    <Header />
    <div className="container text-center">
      {navHead}
      <div className="row">
        <div className="col-lg-12">
          <br />
          Profile
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Profile;
