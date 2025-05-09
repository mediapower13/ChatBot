import React from 'react';
import { User, Bot } from '../utils/icons.js';
import { formatTime } from '../utils/helpers.js';

function Message({ message }) {
  const { text, sender, timestamp } = message;
  
  return (
    <div 
      className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
    >
      <div 
        className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-2 ${
          sender === 'user' 
            ? 'bg-blue-500 text-white rounded-br-none' 
            : 'bg-white text-gray-800 rounded-bl-none shadow'
        }`}
      >
        <div className="flex items-center mb-1">
          {sender === 'bot' ? (
            <Bot size={14} className="mr-1" />
          ) : (
            <User size={14} className="mr-1" />
          )}
          <span className="text-xs opacity-75">{formatTime(timestamp)}</span>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;