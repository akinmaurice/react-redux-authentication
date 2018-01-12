import React from 'react';

const PhotoGrid = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
        Hi PhotoGrid Here
        </div>
      </div>
    </div>
  );
};
export default PhotoGrid;
