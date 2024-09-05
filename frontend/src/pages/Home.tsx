import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClerk, UserButton } from '@clerk/clerk-react';

const Home = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [data, setData] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { user } = useClerk();
  const { firstName, lastName } = user || { firstName: '', lastName: '' };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setData(3000); 
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleTalkToVisionAiClick = () => {
    if (data !== null) {
      navigate(`/chat`, { state: { data } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 text-white px-4 sm:px-8">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <UserButton />
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white px-4 drop-shadow-lg">
            Welcome {firstName} {lastName}
          </h1>
        </div>
        <img src="/logo.svg" alt="VisionTalk Logo" className="w-24 h-24 md:w-32 md:h-32 mb-4" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-teal-300 drop-shadow-lg">
          Upload An Image To Chat With VISIONtalk
        </h1>
        <p className="text-lg text-gray-200 max-w-lg mb-8">
          Experience the power of AI as it recognizes images and engages in
          insightful conversations. Simply upload an image to get started.
        </p>
        <button
          onClick={handleButtonClick}
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-transform transform hover:scale-105"
        >
          Upload Image
          <svg
            className="ml-2 w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
        {selectedFile && (
          <div className="mt-4 text-lg font-semibold text-gray-200">
            <b>Selected File:</b> <span className="text-teal-300">{selectedFile.name}</span>
          </div>
        )}
        {data === null && selectedFile && (
          <div className="mt-4 flex flex-col items-center justify-center space-y-4">
            <img src="/loader.svg" alt="Loading" className="w-24 h-24 md:w-32 md:h-32 animate-spin" />
            <h1 className="text-lg text-gray-200 max-w-lg animate-pulse">AI is processing the image. Please wait...</h1>
          </div>
        )}
        {data !== null && (
          <button
            onClick={handleTalkToVisionAiClick}
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-transform transform hover:scale-105"
          >
            Talk To AI
          </button>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Home;
