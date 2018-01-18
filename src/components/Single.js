import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './utils/Footer';
import TodoHome from './utils/TodoHome';
import { postFetchData } from '../actions/post';


function mapStatetoProps(state) {
  return {
    post: state.post,
    hasErrored: state.postHasErrored,
    isLoading: state.postIsLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: slug => dispatch(postFetchData(slug)),
  };
}

class Single extends Component {
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchData(slug);
  }

  render() {
    let view = <div />;
    if (this.props.hasErrored) {
      view = (
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 text-danger">
              <br />
              That Todo does not exist
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
      view = <TodoHome details={this.props.post} />;
    }
    return (
      <div>
        <Header />
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              {view}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Single);
