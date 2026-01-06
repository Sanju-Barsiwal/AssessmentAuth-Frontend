import React from 'react';
import { useSelector } from 'react-redux';

const Feed = () => {
  const user = useSelector((store) => store.user);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-800">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        {/* Robot Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="../public/robot.png"
              alt="AI Robot"
              className="w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-black mb-4 flex items-center justify-center gap-2">
          Hey {user.firstName} {user.lastName}! 👋
        </h1>

        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
          Welcome to our app
        </h2>

        <p className="text-lg text-gray-600 dark:text-black mb-10 leading-relaxed">
          Let's start with a quick product tour and we will have you up and
          running in no time!
        </p>
      </div>
    </div>
  );
};

export default Feed;
