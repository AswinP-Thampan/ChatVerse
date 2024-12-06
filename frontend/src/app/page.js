"use client"

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [connected, setConnected] = useState(false);

  // Fetch messages on initial load
  useEffect(() => {
    axios.get('http://localhost:5000/messages').then((response) => {
      setMessages(response.data);
    });

    // Listen for new messages
    socket.on('newMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Cleanup on unmount
    return () => socket.off('newMessage');
  }, []);

  // Submit a new message
  const handleSend = () => {
    if (name && text) {
      axios.post('http://localhost:5000/messages', { name, text });
      setText(''); // Clear input after sending
    }
  };

  return (
    <div className='m-5'>
      {!connected && (
        <div className='w-[90vw] h-[90vh] overflow-hidden flex flex-col justify-center items-center'>
          <div className='flex items-end text-[100px] font-gR'>CHAT VERSE</div>
          <div className='w-[400px]'>

            <div className='flex justify-center mb-2 text-xl font-gR'>Guest Login</div>
            <div className='flex gap-2 w-full'>

              <div className="relative w-full">
                <input type="email"
                  className="peer py-3  px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>

              <button onClick={() => setConnected(true)}
                className="py-1.5 px-3 inline-flex shrink-0 justify-center items-center text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none">Join Chat</button>

            </div>
          </div>
        </div>
      )}
      {connected && (
        <div className='grid grid-cols-2 justify-between'>
          <div className='flex flex-col justify-end items-start font-gR'>
            <div className='text-gray-900'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-800'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-700'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-600'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-500'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-400'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-300'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-200'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-100'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>
            <div className='text-gray-50'>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
              <span className='mr-5'>CHAT VERSE</span>
            </div>

            <div className="text-[120px]">CHAT VERSE</div>
          </div>
          <div className='h-[90vh]'>
            <div className='m-10 mb-1 p-5 h-[80vh] rounded-lg max-w-sm overflow-y-scroll bg-[#101010] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full 
                         [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500'>
              <div className=''>
                {messages.map((msg, index) => (
                  <div key={index}>
                    {msg.name === name &&
                      <div className='mb-3 relative flex flex-col items-end'>
                        <div key={index} className='bg-blue-500 py-1 rounded-lg mb-1 min-w-32 text-end px-2 '>
                          <strong>{msg.name}</strong>: {msg.text}
                        </div>
                        <div className='text-[10px] pr-1 '>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    }
                    {msg.name !== name &&
                      <div className='mb-3 w-fit'>
                        <div key={index} className='bg-gray-800 rounded-lg py-1 mb-1 min-w-32 px-2'>
                          <strong>{msg.name}</strong>: {msg.text}
                        </div>
                        <div className='text-[10px] pr-1 flex flex-col items-end'>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-10 relative max-w-sm">
              <textarea className="max-h-36 py-3 ps-4 pe-20 block w-full
                         rounded-lg text-sm 
                         bg-neutral-900 text-neutral-400 
                         placeholder-neutral-500 resize-none 
                         overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full 
                         [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500"
                placeholder="Message..." rows="1"
                value={text} onChange={(e) => setText(e.target.value)}>
              </textarea>

              <div className="absolute top-[6.5px] end-3 z-10">
                <button onClick={handleSend} type="button" className="py-1.5 px-3 inline-flex shrink-0 justify-center items-center text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApp;

