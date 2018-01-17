import React from 'react';
import TodoCard from './utils/TodoCard';


const Grid = (props) => {
  const { posts } = props;
  const todoList = Object.keys(posts).map(post => <TodoCard key={post} details={posts[post]} />);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="headTitle">
            Todo List
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-1" />
        <div className="col-lg-6 col-md-8 col-sm-10">
          <br />
          {todoList}
        </div>
        <div className="col-lg-3 col-md-2 col-sm-1" />
      </div>
    </div>
  );
};
export default Grid;
