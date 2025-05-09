import React from 'react';
import { Menu, Bot } from '../utils/icons.js';

function ChatHeader({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="bg-white shadow-sm p-4 flex items-center">
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        className="mr-4 md:hidden text-gray-600 hover:text-gray-900"
      >
        <Menu size={24} />
      </button>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
          <Bot size={20} />
        </div>
        <div className="ml-3">
          <h3 className="font-medium">ChattyBot</h3>
          <p className="text-xs text-gray-500">Online</p>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;