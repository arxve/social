// src/components/Search.js

import React, { useState } from 'react';

const Search = ({ posts }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q)
    );
    setResults(filteredPosts);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search posts..."
      />
      <ul>
        {results.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
