import React from 'react';

const TodoHome = (props) => {
  const { details } = props;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="headTitle">
              {details.title}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-body todoCard">
              Todo Activities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
