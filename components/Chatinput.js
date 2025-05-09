import React from 'react';
import { Send } from '../utils/icons.js';

function ChatInput({ inputValue, setInputValue, handleSendMessage }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleSendMessage(e);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent chat-input"
        />
        <button 
          onClick={handleSendMessage}
          disabled={!inputValue.trim()}
          className={`ml-2 rounded-full p-2 send-button ${
            inputValue.trim() 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;