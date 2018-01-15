import { Component } from 'react';
import { connect } from 'react-redux';
// Import Logout Action
import logoutUser from '../../actions/logout';

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
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
