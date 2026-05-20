import React from 'react';
import { Home, RefreshCw } from 'lucide-react';

interface NotFoundProps {
  isDark: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ isDark }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="text-center px-4">
        <div className="text-[8rem] font-black leading-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Page Not Found
        </h1>
        <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
          >
            <Home size={18} />
            Go Home
          </button>
          <button
            onClick={() => window.history.back()}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 ${
              isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <RefreshCw size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
