import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const user = useSelector((store) => store.user);
  
  if (!user) {
    return (
      <div className="text-center p-16 text-gray-800">
        Loading About...
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8 bg-gray-50">
      <div className="text-center max-w-4xl">
        {/* Greeting */}
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Hey {user.firstName} {user.lastName}! 👋
        </h1>

        {/* Tech Stack Section */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let me tell you about the tech stack of this project
          </h2>

          <div className="text-left space-y-8">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">🎨</span> Frontend
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Core Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-medium text-sm">React 19.2.0</span>
                    <span className="px-3 py-1.5 bg-cyan-100 text-cyan-800 rounded-lg font-medium text-sm">Tailwind CSS 4.1.18</span>
                    <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-medium text-sm">Redux Toolkit 2.11.2</span>
                    <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-medium text-sm">React Router DOM 7.10.1</span>
                    <span className="px-3 py-1.5 bg-red-100 text-red-800 rounded-lg font-medium text-sm">Axios 1.13.2</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Build Tool & UI:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-lg font-medium text-sm">Vite 7.2.4</span>
                    <span className="px-3 py-1.5 bg-pink-100 text-pink-800 rounded-lg font-medium text-sm">DaisyUI 5.5.14</span>
                    <span className="px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-lg font-medium text-sm">ESLint 9.39.1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">⚙️</span> Backend
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Server & Database:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-medium text-sm">Node.js</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg font-medium text-sm">Express 5.2.1</span>
                    <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg font-medium text-sm">MongoDB</span>
                    <span className="px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-lg font-medium text-sm">Mongoose 9.0.1</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Authentication & Security:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg font-medium text-sm">JWT 9.0.3</span>
                    <span className="px-3 py-1.5 bg-red-100 text-red-800 rounded-lg font-medium text-sm">Bcrypt 6.0.0</span>
                    <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-lg font-medium text-sm">Cookie Parser 1.4.7</span>
                    <span className="px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-lg font-medium text-sm">Helmet 8.1.0</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Other Dependencies:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-teal-100 text-teal-800 rounded-lg font-medium text-sm">CORS 2.8.5</span>
                    <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg font-medium text-sm">Validator 13.15.23</span>
                    <span className="px-3 py-1.5 bg-cyan-100 text-cyan-800 rounded-lg font-medium text-sm">Dotenv 17.2.3</span>
                    <span className="px-3 py-1.5 bg-rose-100 text-rose-800 rounded-lg font-medium text-sm">Rate Limit 8.2.1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">✨</span> Key Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Secure User Authentication with JWT & Bcrypt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Global State Management using Redux Toolkit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Modern UI with Tailwind CSS & DaisyUI Components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>RESTful API with Express.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>MongoDB Database with Mongoose ODM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Cookie-based Session Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Lightning-fast Development with Vite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Rate Limiting & Security Headers with Helmet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Input Validation with Validator.js to prevent injection attacks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;