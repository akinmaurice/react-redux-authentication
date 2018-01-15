import React from 'react';
import PostCard from './utils/PostCard';


const PhotoGrid = (props) => {
  const { posts } = props;
  const postList = Object.keys(posts).map(post => <PostCard key={post} details={posts[post]} />);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="headTitle">
             GramClone
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-1" />
        <div className="col-lg-6 col-md-8 col-sm-10">
          <br />
          {postList}
        </div>
        <div className="col-lg-3 col-md-2 col-sm-1" />
      </div>
    </div>
  );
};
export default PhotoGrid;
