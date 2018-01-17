import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './utils/Footer';

const navHead = (
  <div className="row">
    <div className="col-lg-12">
      <h3 className="headTitle">
       Create New Todo
      </h3>
    </div>
  </div>
);

class NewTodo extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    // On Submit Get the User Details from Form and Post
    const newTodo = {
      title: this.title.value,
    };
    console.log(newTodo);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          {navHead}
          <div className="row">
            <div className="col-lg-12">
              <form className="form-signin" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    ref={(input) => { this.title = input; }}
                    type="text"
                    name="title"
                    placeholder="Todo Title"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-warning btn-block">
                    Create Todo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default NewTodo;
