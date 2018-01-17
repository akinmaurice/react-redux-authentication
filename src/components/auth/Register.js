import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registrationFetchData } from '../../actions/register';

const navHead = (
  <div className="row">
    <div className="col-lg-12">
      <h3>
        <Link to="/" className="headTitle">
       React-Redux Auth
        </Link>
      </h3>
      <h6>
      Create Account
      </h6>
    </div>
  </div>
);

function mapStatetoProps(state) {
  return {
    hasErrored: state.registrationHasErrored,
    isLoading: state.registrationIsLoading,
    success: state.registrationSuccess,
    errorMessage: state.registrationErrorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: newUser => dispatch(registrationFetchData(newUser)),
  };
}


class Register extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      passwordConfirm: this.passwordConfirm.value,
    };
    this.props.fetchData(newUser);
  }

  render() {
    const { errorMessage } = this.props;
    const { hasErrored } = this.props;
    const { isLoading } = this.props;
    const { success } = this.props;
    let view = '';
    if (hasErrored && errorMessage === '') {
      view = 'There Was an Error Creating your Account!';
    } else if (hasErrored && errorMessage !== '') {
      view = errorMessage;
    } else if (isLoading) {
      view = <i className="fa fa-2x fa-circle-o-notch fa-spin" />;
    } else if (success && !hasErrored) {
      view = 'Account Created Please Login';
    }
    return (
      <div>
        <div className="container text-center">
          {navHead}
          <div className="row">
            <div className="col-lg-12">
              <form className="form-signin" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input ref={(input) => { this.name = input; }} type="name" name="name" placeholder="Full Name" className="form-control" />
                </div>
                <div className="form-group">
                  <input ref={(input) => { this.email = input; }} type="email" name="email" placeholder="Email Address" className="form-control" />
                </div>
                <div className="form-group">
                  <input ref={(input) => { this.password = input; }} type="password" name="password" placeholder="Password" className="form-control" />
                </div>
                <div className="form-group">
                  <input ref={(input) => { this.passwordConfirm = input; }} type="password" name="password-confirm" placeholder="Confirm Password" className="form-control" />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    Register
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

export default connect(mapStatetoProps, mapDispatchToProps)(Register);
