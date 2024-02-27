// src/components/Posts.js

import React, { useState } from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([
    { title: 'Post 1', content: 'This is the first post.' },
    { title: 'Post 2', content: 'This is the second post.' },
  ]);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
