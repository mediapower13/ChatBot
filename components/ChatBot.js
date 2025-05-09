import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar.js';
import ChatHeader from './ChatHeader.js';
import MessagesList from './MessagesList.js';
import ChatInput from './ChatInput.js';
import { getBotResponse } from '../utils/botResponses.js';

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your friendly chatbot assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botReply = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };
  
  const clearChat = () => {
    setMessages([{
      id: 1,
      text: "Hello! I'm your friendly chatbot assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }]);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
        clearChat={clearChat} 
      />
      
      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Chat Header Component */}
        <ChatHeader 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
        />
        
        {/* Messages List Component */}
        <MessagesList 
          messages={messages} 
          isTyping={isTyping} 
          messagesEndRef={messagesEndRef} 
        />
        
        {/* Chat Input Component */}
        <ChatInput 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          handleSendMessage={handleSendMessage} 
        />
      </div>
    </div>
  );
}

export default ChatBot;