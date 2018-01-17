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
    errorMessage: state.loginErrorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: loginUser => dispatch(loginFetchData(loginUser)),
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
    const loginUser = {
      email: this.email.value,
      password: this.password.value,
    };
    this.props.fetchData(loginUser);
  }

  render() {
    const { errorMessage } = this.props;
    const { hasErrored } = this.props;
    const { isLoading } = this.props;
    let view = '';
    if (hasErrored && errorMessage === '') {
      view = 'There Was an Error Loggin you in!';
    } else if (hasErrored && errorMessage !== '') {
      view = errorMessage;
    } else if (isLoading) {
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
                  <input ref={(input) => { this.email = input; }} type="email" name="email" placeholder="Email Address" className="form-control" />
                </div>
                <div className="form-group">
                  <input ref={(input) => { this.password = input; }} type="password" name="password" placeholder="Password" className="form-control" />
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
