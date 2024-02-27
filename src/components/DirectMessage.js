// src/components/DirectMessage.js

import React, { useState } from 'react';

const DirectMessage = ({ user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: 'You', // Change as needed
      text: message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <div className="direct-message">
      <h3>Direct Messages with {user}</h3>
      <div className="message-history">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default DirectMessage;
