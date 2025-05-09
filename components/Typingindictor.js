import React from 'react';
import { Bot } from '../utils/icons.js';

function TypingIndicator() {
  return (
    <div className="flex justify-start animate-fadeIn">
      <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-2 shadow max-w-xs">
        <div className="flex items-center mb-1">
          <Bot size={14} className="mr-1" />
          <span className="text-xs opacity-75">Now</span>
        </div>
        <div className="flex space-x-1 typing-indicator">
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
          <div className="typing-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;