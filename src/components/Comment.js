// src/components/Comment.js

import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <strong>{comment.user}:</strong> {comment.text}
    </div>
  );
};

export default Comment;
