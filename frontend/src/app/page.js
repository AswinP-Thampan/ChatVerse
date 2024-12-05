"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [nameSubmitted, setNameSubmitted] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:5000/messages');
    setMessages(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    const newMessage = { username, message };
    await axios.post('http://localhost:5000/messages', newMessage);
    setMessage('');
    fetchMessages();
  };

  return (
    <div>
      {!nameSubmitted ? (
        <form onSubmit={(e) => { e.preventDefault(); setNameSubmitted(true); }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              required
            />
            <button type="submit">Send</button>
          </form>
          <div>
            {messages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.username}</strong>: {msg.message} <small>{new Date(msg.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
