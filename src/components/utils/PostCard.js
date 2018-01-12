import React from 'react';

const PostCard = (props) => {
  const { details } = props;
  return (
    <p>
      {details.real_url}
    </p>
  );
};

export default PostCard;
