import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginFetchData } from '../../actions/login';

const navHead = (
  <div className="row">
    <div className="col-lg-12">
      <h3>
        <Link to="/" className="headTitle">
       React-Redux Auth
        </Link>
      </h3>
      <h6>
      Sign In
      </h6>
    </div>
  </div>
);

function mapStatetoProps(state) {
  return {
    hasErrored: state.loginHasErrored,
    isLoading: state.loginIsLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(loginFetchData()),
  };
}


class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // On Submit Get the User Details from Form and Post
    this.props.fetchData();
  }

  render() {
    let view = '';
    if (this.props.hasErrored) {
      view = 'There Was an Error Loggin you in!';
    } else if (this.props.isLoading) {
      view = <i className="fa fa-2x fa-circle-o-notch fa-spin" />;
    }
    return (
      <div>
        <div className="container text-center">
          {navHead}
          <div className="row">
            <div className="col-lg-12">
              <form className="form-signin" onSubmit={this.onSubmit}>
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
                <div className="form-group">
                  <p className="text-danger">
                    {view}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Login);
