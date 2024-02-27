// src/components/UserFeed.js

import React from 'react';
import Post from './Post';

const UserFeed = ({ posts }) => {
  return (
    <div className="user-feed">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default UserFeed;
