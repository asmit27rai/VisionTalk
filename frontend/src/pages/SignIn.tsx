import { SignInButton } from "@clerk/clerk-react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 text-white">
      <div className="flex flex-col items-center space-y-6 text-center">
      <img src="/logo.svg" alt="VisionTalk Logo" className="w-32 h-32" />
        <h1 className="text-4xl font-bold tracking-wide text-white drop-shadow-lg">
          Welcome To VisionTalk
        </h1>
        <p className="text-lg text-gray-300">
          Revolutionize Your Interactions: Chat with AI-Powered Image
          Recognition.
        </p>
        <button className="relative flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-transform duration-300 ease-in-out bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg hover:scale-105 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-300">
          <svg
            className="w-6 h-6 mr-2 animate-bounce"
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
          <SignInButton />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
