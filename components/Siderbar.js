import React from 'react';
import { MessageSquare, X, Settings } from '../utils/icons.js';

function Sidebar({ isSidebarOpen, setIsSidebarOpen, clearChat }) {
  return (
    <div 
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-gray-800 text-white transition duration-300 ease-in-out z-10 md:relative md:translate-x-0 sidebar`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold flex items-center">
            <MessageSquare className="mr-2" size={20} />
            ChattyBot
          </h2>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={clearChat}
            className="w-full flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <X size={16} className="mr-2" />
            Clear Chat
          </button>
          
          <button className="w-full flex items-center p-2 rounded hover:bg-gray-700 transition-colors">
            <Settings size={16} className="mr-2" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;