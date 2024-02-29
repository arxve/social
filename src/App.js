// src/App.js

import React from 'react';
import Auth0ProviderWithHistory from './Auth0Provider';
import Auth from './components/Auth';
import Profile from './components/Profile';
import Posts from './components/Posts';

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div>
        <Auth />
        <Profile />
        <Posts />
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;
