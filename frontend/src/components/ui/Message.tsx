import React from 'react';
import { UserButton } from '@clerk/clerk-react';

interface MessageProps {
  content: string;
  sender: 'user' | 'ai';
}

const Message: React.FC<MessageProps> = ({ content, sender }) => {
  return (
    <div
      className={`flex items-start space-x-4 ${
        sender === 'ai' ? 'justify-start' : 'justify-end'
      } mb-4`}
    >
      {sender === 'ai' && (
        <img src="/logo.svg" alt="AI" className="w-8 h-8 hidden md:block" />
      )}
      <div
        className={`p-4 rounded-lg text-white ${
          sender === 'ai'
            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md'
            : 'bg-teal-400 shadow-lg'
        } max-w-full md:max-w-[80%] break-words`}
        style={{
          opacity: 0,
          transform: 'translateY(10px)',
          animation: 'fadeIn 0.5s ease-out forwards'
        }}
      >
        {content}
      </div>
      {sender === 'ai' ? null : (
        <UserButton/>
      )}
    </div>
  );
};

export default Message;
