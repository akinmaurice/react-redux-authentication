import React from 'react';
import { Link } from 'react-router-dom';

const TodoCard = (props) => {
  const { details } = props;
  const todoUrl = `/todo/${details.slug}`;
  let view = <p />;
  if (details.completed) {
    view = (
      <p className="text-success">
        Completed
      </p>
    );
  } else if (!details.completed) {
    view = (
      <p className="text-danger">
        Pending
      </p>
    );
  }
  return (
    <Link to={todoUrl} className="navLink">
      <div className="card-body todoCard">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10 col-10 text-left todoTitle">
              {details.title}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-right todoStatus">
              {view}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TodoCard;
