import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import PhotoGrid from './PhotoGrid';
import { postsFetchData } from '../actions/posts';

function mapStatetoProps(state) {
  return {
    posts: state.posts,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(postsFetchData()),
  };
}

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    let view = <div />;
    if (this.props.hasErrored) {
      view = (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              There Was an Error Loading Data
            </div>
          </div>
        </div>
      );
    } else if (this.props.isLoading) {
      view = (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Loading Data...
            </div>
          </div>
        </div>
      );
    } else {
      view = <PhotoGrid posts={this.props.posts} />;
    }
    return (
      <div>
        <Header />
        {view}
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
