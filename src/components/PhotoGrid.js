import React from 'react';
import PostCard from './utils/PostCard';

const PhotoGrid = (props) => {
  const { posts } = props;
  const postList = Object.keys(posts).map(post => <PostCard key={post} details={posts[post]} />);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          {postList}
        </div>
      </div>
    </div>
  );
};
export default PhotoGrid;
