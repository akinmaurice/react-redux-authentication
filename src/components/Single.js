import React from 'react';
import Header from './Header';
import Footer from './utils/Footer';

const Single = () => (
  <div>
    <Header />
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          Single component here for each todo
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Single;
