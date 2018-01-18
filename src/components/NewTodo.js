import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './utils/Footer';
import { newTodoFetchData, resetPostState } from '../actions/post';

const navHead = (
  <div className="row">
    <div className="col-lg-12">
      <h3 className="headTitle">
       Create New Todo
      </h3>
    </div>
  </div>
);

function mapStatetoProps(state) {
  return {
    hasErrored: state.postHasErrored,
    isLoading: state.postIsLoading,
    post: state.post,
    errorMessage: state.postErrorMessage,
    success: state.newPostSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: newTodo => dispatch(newTodoFetchData(newTodo)),
    resetState: () => dispatch(resetPostState()),
  };
}


class NewTodo extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.props.resetState();
  }

  onSubmit(event) {
    event.preventDefault();
    // On Submit Get the User Details from Form and Post
    const newTodo = {
      title: this.title.value,
    };
    this.props.fetchData(newTodo);
  }

  render() {
    const { post } = this.props;
    const { errorMessage } = this.props;
    const { hasErrored } = this.props;
    const { isLoading } = this.props;
    const { success } = this.props;
    const postUrl = `/todo/${post.slug}`;
    let view = <div />;
    if (hasErrored && errorMessage === '') {
      view = (
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 text-danger">
              <br />
              There was an Error creating new Todo
            </div>
          </div>
        </div>
      );
    } else if (hasErrored && errorMessage !== '') {
      view = (
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 text-danger">
              <br />
              Invalid Todo Title
            </div>
          </div>
        </div>
      );
    } else if (isLoading) {
      view = (
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <br />
              <i className="fa fa-2x fa-circle-o-notch fa-spin" />
            </div>
          </div>
        </div>
      );
    } else if (success) {
      view = <Redirect to={postUrl} />;
    }
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
                <div className="form-group">
                  {view}
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

export default connect(mapStatetoProps, mapDispatchToProps)(NewTodo);
