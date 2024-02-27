// src/App.js

import React from 'react';
import Auth0ProviderWithHistory from './Auth0Provider';
import Auth from './components/Auth';
import Profile from './components/Profile';

function App() {
  return (
    <Auth0ProviderWithHistory>
      <div>
        <Auth />
        <Profile />
      </div>
    </Auth0ProviderWithHistory>
  );
}

export default App;

