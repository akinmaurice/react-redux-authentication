import React, { Component } from 'react';
import { connect } from 'react-redux';
// Import Logout Action
import logoutUser from '../../actions/login';

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
}

class Logout extends Component {
  componentWillMount() {
    this.props.logoutUser();
  }
  render() {
    return (
      <div className="text-center">
        Signed Out
        <br />
        <a href="/">Click here to continue</a>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
