import React, { useState } from 'react';
import Message from '@/components/ui/Message';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ content: string; sender: 'user' | 'ai' }[]>([
    { content: 'Hello, how can I assist you today?', sender: 'ai' },
    { content: 'I want to know more about your services.', sender: 'user' },
  ]);
  
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { content: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages([...messages, { content: input, sender: 'user' }, { content: 'Thank you for your query! We will get back to you soon.', sender: 'ai' }]);
      }, 1000);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900">
      <div className="flex-1 overflow-y-auto p-4 mb-16">
        <div className="flex flex-col space-y-4">
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              sender={message.sender}
            />
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4 rounded-t-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-lg bg-gray-700 text-white outline-none transition-transform duration-300 ease-in-out focus:ring-2 focus:ring-teal-400"
          />
          <button
            onClick={handleSendMessage}
            className="flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 active:scale-95 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-teal-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h6l-3 7 7-7-7-7 3 7H3z"></path>
            </svg>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
