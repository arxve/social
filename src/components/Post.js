// src/components/Post.js

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Post = ({ post }) => {
  const { user, isAuthenticated } = useAuth0();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!isAuthenticated) return;
    const newComment = {
      user: user.nickname,
      text: comment,
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  const handleLike = () => {
    // Handle liking post
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleLike}>Like</button>
      <h4>Comments:</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.user}:</strong> {comment.text}
          </li>
        ))}
      </ul>
      {isAuthenticated && (
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment"
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Post;
