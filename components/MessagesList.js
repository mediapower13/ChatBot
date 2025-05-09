import React from 'react';
import Message from './Message.js';
import TypingIndicator from './TypingIndicator.js';

function MessagesList({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
      <div className="space-y-4">
        {/* Render all messages */}
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        
        {/* Show typing indicator when bot is "typing" */}
        {isTyping && <TypingIndicator />}
        
        {/* Invisible element for auto-scrolling */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default MessagesList;