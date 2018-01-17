import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Grid from './Grid';
import Footer from './utils/Footer';
import { postsFetchData } from '../actions/posts';

function mapStatetoProps(state) {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading,
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
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <br />
              There Was an Error Loading Data
            </div>
          </div>
        </div>
      );
    } else if (this.props.isLoading) {
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
    } else {
      view = <Grid posts={this.props.posts} />;
    }
    return (
      <div>
        <Header />
        {view}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
