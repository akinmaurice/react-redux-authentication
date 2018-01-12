import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import PhotoGrid from './PhotoGrid';

function mapStatetoProps(state) {
  return {
    posts: state.posts,
  };
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PhotoGrid posts={this.props.posts} />
      </div>
    );
  }
}

export default connect(mapStatetoProps)(App);
