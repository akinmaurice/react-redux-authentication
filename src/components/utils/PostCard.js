import React from 'react';

const bg = require('../../css/bg.jpg');

const PostCard = (props) => {
  const { details } = props;
  return (
    <div className="card-body">
      <div className="postHeader text-left">
        <div className="round round-lg text-center">
          <span className="fa fa-user" />
        </div>
        &nbsp; UserName
      </div>
      <div className="image-wrap">
        <br />
        <img src={bg} alt="bgImage" />
      </div>
      <div className="postFooter text-left">
        <br />
        <ul className="list-inline">
          <li className="list-inline-item">
            <i className="fa fa-3x fa-heart-o" />
          </li>
        </ul>
        <p>100 Likes </p>
      </div>
    </div>
  );
};

export default PostCard;
